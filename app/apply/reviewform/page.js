"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/compat/router";
import {
  ProgressIndicator,
  ProgressStep,
  Button,
  Stack,
  Form,
  FormGroup,
  TextInput,
  Column,
  Grid,
  RadioButtonGroup,
  RadioButton,
  Checkbox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  TextArea,
} from "@carbon/react";

export default function ReviewEditForm() {
  const [data, setData] = useState("");
  const [isChecked,setIsChecked] = useState(false)

  const items = [
    {
      id: "option-0",
      text: "Option 0",
    },
    {
      id: "option-1",
      text: "Option 1",
    },
  ];
  


  useEffect(() => {
    function fetchData() {
      const raw = "";

      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("/api/applicant", requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result[0]))
        .catch((error) => console.error(error));
    }
    if(localStorage.getItem("Autofill") === 'Yes'){
      fetchData();
    }
  }, []);

  
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
            >
              <RadioButton labelText="New" value="New" />
              <RadioButton labelText="Renewal" value="Renewal" />
            </RadioButtonGroup>

            <RadioButtonGroup
              helperText="Required*"
              legendText="Have a Unique Identification Card?"
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
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Names"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.NAME: ""}
                  onChange={(e) => setData({...data,NAME: e.target.value })}
                />
                <TextInput
                  labelText="Surname"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.SURNAME: ""}
                  onChange={(e) => setData({...data,SURNAME: e.target.value })}
                />
                <TextInput
                  labelText="Other Names (If Any)"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
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
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Previous Names (If Any)"
                  size="md"
                  helperText="Optional"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Date Of Birth"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                    value={data ? data.DATEOFBIRTH: ""}
                    onChange={(e) => setData({...data,DATEOFBIRTH: e.target.value })}
                  />
                </DatePicker>
                <TextInput
                  labelText="Place Of Birth"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                  value={data ? data.PLACEOFBIRTH: ""}
                  onChange={(e) => setData({...data,PLACEOFBIRTH: e.target.value })}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <RadioButtonGroup 
              helperText="Required*" 
              legendText="Gender" 
              valueSelected={data.GENDER}
              onChange={(e) => setData({...data,GENDER: e })}
            >
              <RadioButton labelText="Male" value="M" />
              <RadioButton labelText="Female" value="F" />
            </RadioButtonGroup>
            <RadioButtonGroup
              helperText="Required*"
              legendText="Marital Status"
            >
              <RadioButton labelText="Single" value="Single" />
              <RadioButton labelText="Married" value="Married" />
              <RadioButton labelText="Divorced" value="Divorced" />
              <RadioButton labelText="Widowed" value="Widowed" />
              <RadioButton labelText="Other" value="Other" />
            </RadioButtonGroup>
            <TextInput
              labelText="Other Names (If Any)"
              hideLabel
              size="md"
              helperText="If other declare here"
            />
          </div>
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Tax Identification Number"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Speciality"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Job Title/Occupation"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <TextInput
                  labelText="Monthly Salary (MUR)"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem", width: "250px" }}
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
                  items={items}
                  initialSelectedItem={items[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <RadioButtonGroup
                  helperText="Required*"
                  legendText="Do you have another Nationality?"
                  style={{ marginRight: "1.25rem", width: "250px" }}
                >
                  <RadioButton labelText="Yes" value="Yes" />
                  <RadioButton labelText="No" value="No" />
                </RadioButtonGroup>
                <Dropdown
                  titleText="Present Nationality"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={items}
                  initialSelectedItem={items[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Acquisition Date"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                  />
                </DatePicker>
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
                >
                  <RadioButton labelText="Yes" value="Yes" />
                  <RadioButton labelText="No" value="No" />
                </RadioButtonGroup>
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Renounce Date"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                  />
                </DatePicker>
                <TextInput
                  labelText="Why did you renounce?"
                  helperText="Required if yes*"
                  style={{ marginRight: "1.25rem", width: "400px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{marginTop: '1rem'}}>
            <TextArea 
                labelText="Any Additional Information You Wish To Bring To The Attention Of The Occupation Permit Unit?"
            />
          </div>
        </div>
        <div className="form-container">
          <h6 style={{marginTop: '1.5rem'}}>Applicant’s Personal Details</h6>
          <div style={{display: 'flex', marginTop: '1rem'}}>
            <FormGroup style={{display: 'flex'}}>
              <TextInput 
                labelText="Residential Address in Mauritius"
                helperText="Optional"
                style={{width: '740px',marginRight: '1.5rem'}}
              />
              <TextInput 
                labelText="City"
                helperText="Optional"
                style={{width: '300px'}}
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
                style={{width: '740px',marginRight: '1.5rem'}}
              />
              <TextInput 
                labelText="City"
                helperText="Required"
                style={{width: '300px'}}
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
                    items={items}
                    initialSelectedItem={items[0]}
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
                  items={items}
                  initialSelectedItem={items[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Date of Issue"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                  />
                </DatePicker>
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Date of Expiry"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                  />
                </DatePicker>
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
            <RadioButtonGroup
              helperText="Required*"
              legendText="Do you hold the right of re-entry into your country?"
              style={{ marginRight: "1.25rem" }}
            >
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
            <DatePicker type="single">
              <DatePickerInput
                placeholder="mm/dd/yyyy"
                labelText="Date of Expiry right"
                size="md"
                helperText="Required"
                style={{ marginRight: "1.25rem", width: "250px" }}
              />
            </DatePicker>
            <RadioButtonGroup
              helperText="Required*"
              legendText="Do you hold the right of re-entry into your last place of residence?"
              style={{ marginRight: "1.25rem" }}
            >
              <RadioButton labelText="Yes" value="Yes" />
              <RadioButton labelText="No" value="No" />
            </RadioButtonGroup>
            <DatePicker type="single">
              <DatePickerInput
                placeholder="mm/dd/yyyy"
                labelText="Date of Expiry right"
                size="md"
                helperText="Required"
                style={{ marginRight: "1.25rem", width: "250px" }}
              />
            </DatePicker>
          </FormGroup>
          </div>
          <div style={{marginTop: '1.5rem'}}>
          <TextArea 
            labelText="If No to any of the above, please give details" 
            helperText="Optional"
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
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Date of Incorporation / Registration"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                 />
               </DatePicker>
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
            <FormGroup style={{display:  'flex', justifyContent: 'space-around'}}>
              <TextInput 
                labelText="Business Name"
                size="md"
                helperText="Required*"
                style={{width: '250px'}}
              />
              <TextInput
                labelText="General Nature of Activities"
                helperText="Required*"
              />
            </FormGroup>
          </div>
          <div style={{marginTop: '1rem'}}>
          <TextArea 
            labelText="Address of Principal Place of Business"
            helperText="Required*"
            />
            </div>
          <div style={{marginTop: '1rem'}}>
          <TextArea 
            labelText="Address for Correspondence"
            helperText="Required*"
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
                <DatePicker type="single">
                  <DatePickerInput
                    placeholder="mm/dd/yyyy"
                    labelText="Date/ Approved Date for Start of Business"
                    size="md"
                    helperText="Required"
                    style={{ marginRight: "1.25rem", width: "250px" }}
                 />
               </DatePicker>
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
                  items={items}
                  initialSelectedItem={items[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
                <Dropdown
                  titleText="Other sector of activities"
                  label="Choose an option"
                  size="md"
                  helperText="Required"
                  items={items}
                  initialSelectedItem={items[0]}
                  itemToString={(item) => item ? item.text : ""}
                  style={{ marginRight: "1.25rem", width: "250px" }}
                />
              </FormGroup>
            </Stack>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Stack>
              <FormGroup style={{ display: "flex" }}>
                <TextInput
                  labelText="Workforce at the time of Application for Local"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem"}}
                />
                <TextInput
                  labelText="Workforce at the time of Application for Expatriates"
                  size="md"
                  helperText="Required"
                  style={{ marginRight: "1.25rem"}}
                />
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
          <div style={{marginTop: '1rem',marginLeft: "40%"}}>
          <DatePicker type="single">
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="Date agreed on"
              size="md"
              id="date-picker-single"
              
            />
          </DatePicker>
          </div>
          <div style={{display: 'flex', justifyContent: 'center',marginTop: '3rem'}}>
            {
              isChecked ? (
                <Button 
                className="btn"
                size="lg" 
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
        </div>
      </div>
    </>
  );
}
