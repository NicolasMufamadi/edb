"use client";
import { useEffect, useState } from "react";
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
  Checkbox
} from "@carbon/react";


export default function ReviewEditForm() {

    const [data, setData] = useState("");

    useEffect(() => {
        function fetchData() {
            const raw = "";

            const requestOptions = {
              method: "GET",
              redirect: "follow"
            };
            
            fetch("https://edb-mauritius-edb-3.apps.67a0a43af9f6659c21a114dd.am1.techzone.ibm.com/api/applicant", requestOptions)
              .then((response) => response.json())
              .then((result) => setData(result
              ))
              .catch((error) => console.error(error));
        }
        fetchData()
    },[])

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
        <ProgressIndicator spaceEqually style={{ width: "50%" }}>
          <ProgressStep complete label="Upload Files" />
          <ProgressStep complete label="Auto Fill Form" />
          <ProgressStep current label="Review and Edit Form" />
          <ProgressStep label="Submit Form" />
        </ProgressIndicator>
      </div>
      <div
        style={{
          padding: "2rem",
          marginTop: '2rem'
        }}
      >
        <h2 style={{marginBottom: '1rem'}}>Applicant Personal Details</h2>
        <Stack gap={7}>
          <FormGroup style={{display: 'flex'}}>
            <TextInput 
                labelText='First Name'
                type="text"  
                style={{width: '500px'}}
                value={data ? data[0].NAME : ""}
                
            />
            <TextInput 
                labelText='Last Name' 
                type="text" 
                style={{width: '500px'}}
                value={data ? data[0].SURNAME : ""}
            />
          </FormGroup>

          <span>Gender</span>
          <FormGroup>
            <RadioButtonGroup legendText='Sex' >
                <RadioButton id="radio-1" labelText='Male'  value="Male" />
                <RadioButton id="radio-2" labelText="Female" value="Female" />
            </RadioButtonGroup>
          </FormGroup>

          <span>Marital Status</span>
          <FormGroup>
            <RadioButtonGroup>
                <RadioButton id="radio-3" labelText='Single'  value="Single" />
                <RadioButton id="radio-4" labelText="Married" value="Married" />
                <RadioButton id="radio-5" labelText='Divorced'  value="Divorced" />
                <RadioButton id="radio-6" labelText="Other" value="Other" />
            </RadioButtonGroup>
          </FormGroup>
          
          <FormGroup style={{display: 'flex'}}>
            <TextInput 
                labelText="Date Of Birth" 
                type="text"
                style={{width: '300px'}}
                value={data ? data[0].DATEOFBIRTH : ""}
            />
            <TextInput 
                labelText="Place Of Birth" 
                type="text"
                style={{width: '500px'}}
                value={data ? data[0].PLACEOFBIRTH : ""}
            />
          </FormGroup>
        </Stack>
        <h2 style={{marginBottom: '1rem',marginTop: '2.5rem'}}>Company Details</h2>
        <Stack gap={7}>
            <Checkbox id="checkbox-1" labelText="GBL Company" />
            <FormGroup style={{display: 'flex'}}>
                <TextInput 
                    labelText='Incorporation Number' 
                    type="text"  
                    style={{width:'500px'}}
                />
                <TextInput 
                    labelText='Business Registration Number' 
                    type="text"  
                    style={{width:'500px'}}
                />
            </FormGroup>
                <TextInput labelText='Speciality' type="text" />
            <FormGroup style={{display: 'flex'}}>
                <TextInput 
                    labelText='Job Title' 
                    type="text"  
                    style={{width:'600px'}}
                />
                <TextInput 
                    labelText='Monthly Based Salary' 
                    type="text"  
                    style={{width:'300px'}}
                />
            </FormGroup>
            <span style={{fontWeight: 'bold', color: 'gray'}}>Duration of professional permit</span>
            <FormGroup style={{display: 'flex'}}>
                <TextInput labelText='Years' type="text" style={{width: '300px'}} />
                <TextInput labelText='Months' type="text" style={{width: '300px'}} />
                <TextInput labelText='Days' type="text" style={{width: '300px'}} />
            </FormGroup>
        </Stack>
        <h2 style={{marginBottom: '1rem',marginTop: '2.5rem'}}>Passport Details</h2>
        <Stack>
            <FormGroup style={{display: 'flex'}}>
                <TextInput 
                    labelText='Passport Number' 
                    type="text"  
                    style={{width:'500px'}}
                    value={data ? data[0].PASSPORTNO : ""}
                />
                <TextInput 
                    labelText='Issuing Country' 
                    type="text"  
                    style={{width:'500px'}}
                    value={data ? data[0].ISSUINGCOUNTRY : ""}
                />
            </FormGroup>
            <FormGroup style={{display: 'flex'}}>
                <TextInput 
                    labelText='Date of Issue' 
                    type="text"  
                    style={{width:'500px'}}
                    value={data ? data[0].DATEOFISSUE : ""}
                />
                <TextInput 
                    labelText='Date of Expiry' 
                    type="text"  
                    style={{width:'500px'}}
                    value={data ? data[0].DATEOFEXPIRY : ""}
                />
            </FormGroup>
        </Stack>
      </div>
    </>
  );
}
