"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CloudUpload } from "@carbon/icons-react";
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
  const [disabled, setDisabled] = useState(true)
  const router = useRouter()

  const handleOnFileChange = (e) => {
    setFile(e.target.files[0])
    setDisabled(false)
  }

  const handleOnDelete = () => {
    setFile("") 
    setDisabled(true)
  }

  console.log(file)

  return (
    <>
      <div className="loader-container">
        <Loading
          active={isActive}
          className="some-class"
          description="Loading"
        />
      </div>
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
          <ProgressStep current label="Upload Signed Documents" />
          <ProgressStep label="Submit Form" />
        </ProgressIndicator>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h4 style={{ textAlign: "center" }}>
          Upload Signed Undertaking Document
        </h4>
      </div>
      <div style={{marginLeft: '38%',marginTop: '1rem',marginBottom: '4rem'}}>
      <FormItem>
        <p className="cds--file--label">Upload files</p>
        <p className="cds--label-description">
          Max file size is 500kb. Supported file types are .jpg and .png.
        </p>
        <FileUploaderDropContainer
          accept={["docx"]}
          innerRef={{
            current: "[Circular]",
          }}
          labelText="Drag and drop a file here or click to upload"
          name=""
          onAddFiles={handleOnFileChange}
        />
        <div className="cds--file-container cds--file-container--drop" />
         {
            file ? (
                <FileUploaderItem 
                key={file.name}
                name={file.name}
                status="edit"
                onDelete={handleOnDelete}
            />
            ): <></>
         }
      </FormItem>
      </div>
      <div style={{display: 'flex', justifyContent: 'center',marginBottom: '3rem'}}>
        <Button 
           className="btn" 
           size="lg"  
           renderIcon={CloudUpload}
           disabled={disabled}
           onClick={() => router.push('/apply/submit')}
        >
            Submit
        </Button>
      </div>
    </>
  );
}
