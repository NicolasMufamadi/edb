"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import 'flatpickr/dist/flatpickr.min.css';
import '@carbon/styles/css/styles.css';
import {
  ProgressIndicator,
  ProgressStep,
  Button,
  Stack,
  FormGroup,
  TextInput,
  RadioButtonGroup,
  RadioButton,
  Checkbox,
  Dropdown,
  TextArea,
} from "@carbon/react";

export default function ReviewEditForm() {

  const [data, setData] = useState({
    NAME: "",
    SURNAME: "",
    OTHERNAMES: "",
    DATEOFBIRTH: "",
    PLACEOFBIRTH: "",
    GENDER: "",
    PASSPORTNO: "",
    PERSONATYPE: "",
    ISSUINGCOUNTRY: "",
    DATEOFISSUE: "",
    DATEOFEXPIRY: "",
    JOBTITLE: "",
    SALARY: "",
    ID: "",
    MAIDENNAME: "",
    OTHERSTATUS: "",
    PREVIOUSNAME: "",
    TAXID: "",
    SPECIALITY: "",
    PROGRESS: "Draft"
  });
  const [isChecked,setIsChecked] = useState(false)
  const router = useRouter()

  const [buttonValue, setButtonValue] = useState({
    APPLICANTCATEGORY: "",
    TRANSACTIONTYPE: "",
    UNIQUEID: "",
    GENDER: "",
    MARITALSTATUS: "",
    ANOTHERNATIONALITY: "",
    RENOUNCENATIONALITY: "",
    GOVERNMENTDOCS: "",
    COUNTRYREENTRY: "",
    RESIDENCENTRY: "",
    CRIME: "",
    CASE: "",
    SUFFERING: ""
  })

  const sectors = [
    {
      id: 1,
      name: "Creative Industry"
    },
    {
      id: 2,
      name: "Innovative Start-ups"
    }
  ]

  const nations = [
    {
      id: "option-0",
      text: "South Africa",
    },
    {
      id: "option-1",
      text: "India",
    },
  ];

  useEffect(() => {

    if(typeof window !== 'undefined' &&  !window.localStorage.getItem("username")){
      router.push('/login')
    }

    function fetchLocalStorageData(){
      if(typeof window !== 'undefined' &&  window.localStorage.getItem("data")){
        const storagedata = window.localStorage.getItem("data")
        setData(JSON.parse(storagedata))
      }
      
      if (typeof window !== 'undefined' &&  window.localStorage.getItem("buttonValue")){
        const storagedata = window.localStorage.getItem("buttonValue")
        setButtonValue(JSON.parse(storagedata))
      }
    }

    function fetchData() {
      const raw = "";

      fetch("/api/applicant", {
        method: 'GET',
        redirect: 'follow'
      })
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json(); // parse as JSON directly
          } else {
            throw new Error("Expected JSON, got: " + contentType);
          }
        })
        .then((result) => {
          setData(result[0]);   // Assuming result is an array
        })
        .catch((error) => console.error('Fetch error:', error));
      }

    if(localStorage.getItem("Autofill") === 'Yes'){
      fetchData();
    }else{
      fetchLocalStorageData()
    }

  }, []);

  
  const handleChange = (e) => {
    const updatedData = { ...data, [e.target.name]: e.target.value };
    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData)); 
  };

  const handleRadioChange = (value, name) => {
    const update = { ...buttonValue, [name]: value}
    setButtonValue(update)
    localStorage.setItem("buttonValue", JSON.stringify(update))
  }

  const downloadUnderTaking = async () => {
    router.push('/apply/upload')
  }

  return (
    <>
      <h3
        style={{ textAlign: "center", marginTop: "2.25rem", fontWeight: "400" }}
      >
        Work and Live Permit Application
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
        }}
      >
        <ProgressIndicator spaceEqually style={{ width: "85%" }}>
          <ProgressStep complete label="Upload Files" />
          <ProgressStep complete label="Auto Fill Form" />
          <ProgressStep current label="Review and Edit Form" />
          <ProgressStep label="Upload Signed Documents" />
          <ProgressStep label="Submit Form" />
        </ProgressIndicator>
      </div>
      <div
        style={{
          padding: "2rem",
          marginTop: "2rem",
        }}
      >
        <h4 style={{ textAlign: "center" }}>
          Review and Edit your Application Form
        </h4>
        <p className="autofill-text">
          With the help of EDB Assistant, you have pre-filled your application.
          Please ensure that all the details on the application form are correct
          and complete your application form by filling in the missing fields.{" "}
        </p>
        <div className="form-container">
          <h6>Applicant’s Personal Details</h6>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <RadioButtonGroup
              helperText="Required*"
              legendText="Applicant's Category"
              name="APPLICANTCATEGORY"
              valueSelected={buttonValue.APPLICANTCATEGORY}
              onChange={(value, name) => handleRadioChange(value, name)}
            >
              <RadioButton id="cat-1" labelText="Investor" value="Investor" />
              <RadioButton
                id="cat-2"
                labelText="Self Employed"
                value="Self Employed"
              />
              <RadioButton id="cat-3" labelText="Retired" value="Retired" />
              <RadioButton
                id="cat-4"
                labelText="Young Professional"
                value="Young Professional"
              />
            </RadioButtonGroup>

            <RadioButtonGroup
              helperText="Required*"
              legendText="Transaction-Type"
              name="TRANSACTIONTYPE"
              valueSelected={buttonValue.TRANSACTIONTYPE}
              onChange={(value, name) => handleRadioChange(value, name)}
            >
              <RadioButton labelText="New" value="New" />
              <RadioButton labelText="Renewal" value="Renewal" />
            </RadioButtonGroup>

            <RadioButtonGroup
              helperText="Required*"
              legendText="Have a Unique Identification Card?"
              name="UNIQUEID"
              valueSelected={buttonValue ? buttonValue.UNIQUEID : ""}
              onChange={(value, name) => handleRadioChange(value, name)}
            >
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
          </div>

          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Unique Identification Number"
                  size="md"
                  helperText="Required"
                  name="ID"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.ID: ""}
                  onChange={handleChange}
                />
                <TextInput
                  name="NAME"
                  labelText="Names"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.NAME: ""}
                  onChange={handleChange}
                />
                <TextInput
                  name="SURNAME"
                  labelText="Surname"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.SURNAME: ""}
                  onChange={handleChange}
                />
                <TextInput
                  labelText="Other Names (If Any)"
                  size="md"
                  helperText="Optional"
                  name="OTHERNAMES"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.OTHERNAMES: ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Maiden Name (If Any)"
                  size="md"
                  helperText="Optional"
                  name="MAIDENNAME"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.MAIDENNAME: ""}
                  onChange={handleChange}
                />
                <TextInput
                  labelText="Previous Names (If Any)"
                  size="md"
                  helperText="Optional"
                  name="PREVIOUSNAME"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.PREVIOUSNAME: ""}
                  onChange={handleChange}
                />
                <div style={{marginRight: "1.25rem"}}>
                <TextInput
                  name="DATEOFBIRTH"
                  labelText="Date Of Birth"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.DATEOFBIRTH: ""}
                  onChange={handleChange}
                />
                </div>
                <TextInput
                  name="PLACEOFBIRTH"
                  labelText="Place Of Birth"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.PLACEOFBIRTH: ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <RadioButtonGroup 
              name="GENDER"
              helperText="Required*" 
              legendText="Gender" 
              valueSelected={buttonValue.GENDER}
              onChange={(value, name) => handleRadioChange(value, name)}
            >
              <RadioButton labelText="Male" value="M" />
              <RadioButton labelText="Female" value="F" />
            </RadioButtonGroup>
            <RadioButtonGroup
              helperText="Required*"
              legendText="Marital Status"
              valueSelected={buttonValue.MARITALSTATUS}
              onChange={(value, name) => handleRadioChange(value, name)}
            >
              <RadioButton labelText="Single" value="Single" />
              <RadioButton labelText="Married" value="Married" />
              <RadioButton labelText="Divorced" value="Divorced" />
              <RadioButton labelText="Widowed" value="Widowed" />
              <RadioButton labelText="Other" value="Other" />
            </RadioButtonGroup>
            <div style={{marginRight: '4rem'}}>
            <TextInput
              labelText="Other Names (If Any)"
              hideLabel
              size="md"
              name="OTHERSTATUS"
              helperText="If other declare here"
              style={{width: '250px'}}
              value={data ? data.OTHERSTATUS: ""}
              onChange={handleChange}
            />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Tax Identification Number"
                  size="md"
                  helperText="Required"
                  name="TAXID"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.TAXID: ""}
                  onChange={handleChange}
                />
                <TextInput
                  labelText="Speciality"
                  size="md"
                  helperText="Required"
                  name="SPECIALITY"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.SPECIALITY: ""}
                  onChange={handleChange}
                />
                <TextInput
                  labelText="Job Title/Occupation"
                  size="md"
                  helperText="Required"
                  name="JOBTITLE"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.JOBTITLE: ""}
                  onChange={handleChange}
                />
                <TextInput
                  labelText="Monthly Salary (MUR)"
                  size="md"
                  helperText="Required"
                  name="SALARY"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.SALARY: ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <Dropdown
                  titleText="Present Nationality"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={nations}
                  initialSelectedItem={nations[1]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <RadioButtonGroup
                  helperText="Required*"
                  legendText="Do you have another Nationality?"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  valueSelected={buttonValue.ANOTHERNATIONALITY}
                  onChange={(value, name) => handleRadioChange(value, name)}
                >
                  <RadioButton labelText="Yes" value="Yes" />
                  <RadioButton labelText="No" value="No" />
                </RadioButtonGroup>
                <Dropdown
                  titleText="Aquired Nationality"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={nations}
                  initialSelectedItem=""
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="AquisitionDate"
                  size="md"
                  helperText="Required"
                  name="AquisitionDate"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <RadioButtonGroup
                  helperText="Required*"
                  legendText="Have you renounce your Nationality?"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  valueSelected={buttonValue.RENOUNCENATIONALITY}
                  onChange={(value, name) => handleRadioChange(value, name)}
                >
                  <RadioButton labelText="Yes" value="Yes" />
                  <RadioButton labelText="No" value="No" />
                </RadioButtonGroup>
                <div style={{marginRight: "1.25rem"}}>
                <TextInput
                  labelText="Renounce Date"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                </div>
                <TextInput
                  labelText="Why did you renounce?"
                  helperText="Required if yes*"
                  style={{ marginRight: "1.25rem", width: "520px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{marginTop: '1rem'}}>
            <TextArea 
                labelText="Any Additional Information You Wish To Bring To The Attention Of The Occupation Permit Unit?"
                style={{width: '1060px'}}
            />
          </div>
        </div>
        <div className="form-container">
          <h6 style={{marginTop: '1.5rem'}}>Applicant’s Contact Details</h6>
          <div style={{display: 'flex', marginTop: '1rem'}}>
            <FormGroup style={{display: 'flex'}}>
              <TextInput 
                labelText="Residential Address in Mauritius"
                helperText="Optional"
                style={{width: '780px',marginRight: '1.5rem'}}
              />
              <TextInput 
                labelText="City"
                helperText="Optional"
                style={{width: '250px'}}
              />
            </FormGroup>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Mobile Number"
                  size="md"
                  helperText="Optional"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Telephone Number"
                  size="md"
                  helperText="Optional"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Fax Number"
                  size="md"
                  helperText="Optional"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Email address"
                  size="md"
                  helperText="Optional"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{display: 'flex', marginTop: '1rem'}}>
            <FormGroup style={{display: 'flex'}}>
              <TextInput 
                labelText="Residential Address in Country of Origin"
                helperText="Required"
                style={{width: '790px',marginRight: '1.5rem'}}
              />
              <TextInput 
                labelText="City"
                helperText="Required"
                style={{width: '250px'}}
              />
            </FormGroup>
          </div>
          <div style={{display: 'flex', marginTop: '1rem'}}>
            <Stack>
              <FormGroup style={{display: 'flex'}}>
                  <Dropdown
                    titleText="Country"
                    label="Choose an option"
                    size="md"
                    helperText="Required"
                    items={nations}
                    initialSelectedItem={nations[0]}
                    itemToString={(item) => item ? item.text : ""}
                    style={{ marginRight: "1.25rem", width: "250px" }}
                  />
                  <TextInput 
                    labelText="Additional Address (if Any)"
                    helperText="Optional"
                    style={{width: '800px'}}
                  />
              </FormGroup>
            </Stack>
          </div>
          
        </div>
        <div className="form-container">
          <h6 style={{marginTop: '1.5rem'}}>Applicant’s Passport Details</h6>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Passport Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <Dropdown
                  titleText="Issuing Country"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={nations}
                  initialSelectedItem={nations[1]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <div style={{marginRight: "1.25rem"}}>
                <TextInput
                  labelText="Date Of Issue"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.DATEOFISSUE : ""}
                  onChange={handleChange}
                />
                </div>
                <div style={{marginRight: "1.25rem"}}>
                <TextInput
                  labelText="Date Of Expiry"
                  helperText="Required*"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.DATEOFEXPIRY : ""}
                  onChange={handleChange}
                />
                </div>
              </FormGroup>
            </Stack>
          </div>
          <div style={{marginTop: '1rem'}}>
          <RadioButtonGroup
            helperText="Required*"
            warnText="Warning message goes here"
            invalidText="Error message goes here"
            legendText="Do you have any other document issued by your or any other government?"
            style={{ marginRight: "1.25rem" }}
          >
            <RadioButton labelText="Yes" value="Yes" />
            <RadioButton labelText="No" value="No" />
          </RadioButtonGroup>
          </div>
          <div style={{marginTop: '1rem'}}>
          <FormGroup style={{display: 'flex'}}>

            <div style={{marginRight: "1rem"}}>
            <TextInput
                  labelText="Date Of Entry"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
            </div>
            <div style={{marginRight: '1.5rem'}}>
            <TextInput
                  labelText="Date Of Expiry Right"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
            </div>
            <RadioButtonGroup
              helperText="Required*"
              legendText="Do you hold the right of re-entry into your country?"
              style={{ marginRight: "1.25rem", width: '250px' }}
            >
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
            <RadioButtonGroup
              helperText="Required*"
              legendText="Do you hold the right of re-entry into your last place of residence?"
              style={{width: '250px'}}
            >
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
          </FormGroup>
          </div>
          <div style={{marginTop: '1.5rem'}}>
          <TextArea 
            labelText="If No to any of the above, please give details" 
            helperText="Optional"
            style={{width: '1100px'}}
          />
          </div>
        </div>
        <div className="form-container">
          <h6>Health / Security Questions</h6>
          <FormGroup style={{marginTop: '1rem', display: 'flex'}}>
            <RadioButtonGroup 
              helperText="Required*"
              legendText="Have you been convicted of any crime in any country?"
            > 
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
            <RadioButtonGroup 
              helperText="Required*"
              legendText="Is there a civil/criminal case pending against you?"
            > 
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
            <RadioButtonGroup 
              helperText="Required*"
              legendText="Are you suffering of any infectious or contagious disease?"
            > 
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
          </FormGroup>
          <div style={{marginTop: '1rem'}}>
            <TextArea 
              labelText="If the reply to any of the above is Yes, please give full details below and attach relevant documents in the Upload Documents tab (Security / Health Area)"
              helperText="Optional"
              style={{width: '1100px'}}
            />
          </div>
        </div>
        <div className="form-container">
          <h6>Employment History</h6>
          <div style={{marginTop: '1rem'}}>
          <RadioButtonGroup
            helperText="Required*"
            legendText="Have you worked in Mauritius (or currently working)?"
          >
            <RadioButton
              labelText="Yes"
              value="Yes"
            />
            <RadioButton labelText="No" value="No" checked/>
         </RadioButtonGroup>
         </div>
        </div>

        <div className="form-container">
          <h6 style={{marginBottom: '1rem'}}>Company Details</h6>
        <Checkbox
          labelText="GBL Enterprise"
        />
          <div style={{ marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Incorporation Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Business Registration Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <div style={{marginRight: "1.25rem"}}>
                <TextInput
                  labelText="Date Of Incorporation"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
               </div>
                <TextInput
                  labelText="Name of Company"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{marginTop: '1rem'}}>
            <FormGroup style={{display:  'flex'}}>
              <div>
              <TextInput 
                labelText="Business Name"
                size="md"
                helperText="Required*"
                style={{width: '250px'}}
              />
              </div>
              <div style={{marginLeft: '2rem'}}>
              <TextInput
                labelText="General Nature of Activities"
                helperText="Required*"
                style={{width: '815px'}}
              />
              </div>
            </FormGroup>
          </div>
          <div style={{marginTop: '1rem'}}>
          <TextArea 
            labelText="Address of Principal Place of Business"
            helperText="Required*"
            style={{width: '1100px'}}
            />
            </div>
          <div style={{marginTop: '1rem'}}>
          <TextArea 
            labelText="Address for Correspondence"
            helperText="Required*"
            style={{width: '1100px'}}
          />
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Name of Contact Person"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <div style={{marginRight: "1.25rem"}}>
                <TextInput
                  labelText="Date/Approved Date for Business Start"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
               </div>
                <TextInput
                  labelText="Other Phone Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Fax Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Mobile Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Company email address"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <Dropdown
                  titleText="Sector of Activities"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={sectors}
                  initialSelectedItem={sectors[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <Dropdown
                  titleText="Other sector of activities"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={sectors}
                  initialSelectedItem={sectors[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <div>
                <TextInput
                  labelText="Workforce at the time of Application for Local"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: '550px'}}
                />
                </div>
                <div style={{marginLeft: '1.5rem'}}>
                <TextInput
                  labelText="Workforce at the time of Application for Expatriates"
                  size="md"
                  helperText="Required"
                  style={{ width: '520px'}}
                />
                </div>
              </FormGroup>
            </Stack>
          </div>
        </div>
        <div className="form-container">
          <h5>Declaration</h5>
          <div>
            <h6 style={{marginTop: '1rem'}}>I/We declare that all the information given in this application form as in attached documents is true and correct. </h6>
            <h6 style={{marginTop: '1rem'}}>I/We understand that making a false statement is a serious offence and may lead to prosecution and cancellation on an Occupation Permit.</h6>
          </div>
          <div style={{marginTop: '1rem'}}>
          <Checkbox
            id="your_checkbox_id"
            labelText="I agree to the above"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          </div>
          <div style={{display: 'flex', justifyContent: 'center',marginTop: '3rem'}}>
            {
              isChecked ? (
                <Button 
                className="btn"
                size="lg" 
                onClick={downloadUnderTaking}
              >
                Download Undertaking form
              </Button>
              ): (
                <Button 
                className="btn"
                size="lg" 
                disabled
              >
                Download Undertaking form
              </Button>
              )
            }
          </div>
          <div style={{display: 'flex'}}>
            <Button 
              className="btn" 
              style={{display: 'flex', marginTop: '2rem'}}
              onClick={() => router.push('/apply/autofill')}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
