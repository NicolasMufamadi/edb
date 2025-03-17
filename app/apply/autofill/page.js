"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ProgressIndicator,
  ProgressStep,
  Button,
  Loading,
  RadioButtonGroup,
  RadioButton
} from "@carbon/react";


export default function ApplyPermit() {

  const [autofill,setAutoFill] = useState("Yes");
  const router = useRouter();

  const handleAutofillClick = () => {
    localStorage.setItem("Autofill", autofill)
    router.push('/apply/reviewform')
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
          <ProgressStep current label="Upload Files" />
          <ProgressStep current label="Auto Fill Form" />
          <ProgressStep label="Review and Edit Form" />
          <ProgressStep label="Upload Signed Documents" />
          <ProgressStep label="Submit Form" />
        </ProgressIndicator>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <h4>Auto Fill Your Application Form</h4>
      </div>
        <div>
            <p className="autofill-text">With the help of our EDB AI Assistant you can pre-fill details that are captured on the documents you have uploaded to reduce the amount of time you would need to spend on filling in the form manually.</p>
        </div>
        <div style={{marginLeft: '8%',marginTop: '3rem'}}>
            <RadioButtonGroup 
                legendText="Would you like to Auto Fill your application form?"
                valueSelected={autofill}
                onChange={(e) => setAutoFill(e)}
            >
                <RadioButton 
                    id="auto-fill-1"
                    labelText="Yes"
                    value="Yes"
                />
                <RadioButton 
                    id="auto-fill-2"
                    labelText="No"
                    value="No"
                />
            </RadioButtonGroup>
        </div>
        <div style={{display: 'flex', justifyContent: 'center',marginBottom: '6rem',marginTop: '3.75rem'}}>
            <Button 
                className="btn"
                kind="primary"
                size="lg"
                style={{paddingRight: '1.5rem'}}
                onClick={handleAutofillClick}
            >
                Submit
            </Button>
        </div>
    </>
  );
}
