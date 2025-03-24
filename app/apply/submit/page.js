"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CheckmarkOutline, CloudUpload } from "@carbon/icons-react";
import {
  ProgressIndicator,
  ProgressStep,
  FormItem,
  FileUploaderDropContainer,
  FileUploaderItem,
  Button,
  Loading,
} from "@carbon/react";

export default function UploadUnderTaking() {

  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({})
  const [personaType, setPersonaType] = useState("")

  useEffect(() => {
    if(typeof window !== 'undefined' &&  window.localStorage.getItem("data")){
      const storagedata = window.localStorage.getItem("data")
      setData(JSON.parse(storagedata))
    }
    if(typeof window !== 'undefined' &&  window.localStorage.getItem("buttonValue")){
      const storagedata = window.localStorage.getItem("buttonValue")
      setPersonaType(JSON.parse(storagedata))
    }
  },[])

  const getFormattedDate = () => {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.0`;
  };


  const submitApplication = async() => {
    const payload = {
      user_id: 1234,
      applicant_name: data.NAME + " "+ data.SURNAME,
      date_created: getFormattedDate(),
      date_last_modified: getFormattedDate(),
      status: "submitted",
      permit_id: 2002,
      permit_version: 1,
      persona_type: personaType.APPLICANTCATEGORY
    };
    console.log(payload)
  
    try {
      const response = await fetch("/api/add-application", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    
      const contentType = response.headers.get('Content-Type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text(); // Safe fallback
      }
    } catch (err) {
      console.error('Error:', err);
    }
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
          <ProgressStep complete label="Review and Edit Form" />
          <ProgressStep complete label="Upload Signed Documents" />
          <ProgressStep current label="Submit Form" />
        </ProgressIndicator>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h4 style={{ textAlign: "center" }}>
        You have completed your Application form. Click submit to finalise the process!
        </h4>
      </div>
      <div style={{marginTop: '3rem',display: 'flex', justifyContent:'center'}}>
        <CheckmarkOutline className="checkmark-icon" />
      </div>
      <div  style={{marginLeft: '45.8%', marginTop: '3rem', marginBottom: '5rem'}}>
        <Button className="btn" style={{paddingRight: '30px', paddingLeft: '30px'}} onClick={submitApplication}>
            Submit
        </Button>
      </div>
    </>
  );
}
