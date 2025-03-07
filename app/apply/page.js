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
  FileUploader,
  Button,
  Loading
} from "@carbon/react";


export default function ApplyPermit() {

  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    /*
    const formData = new FormData();
    formData.append('graphql',JSON.stringify('{"query": "mutation ($contvar:String) {\ndoc1: createDocument(repositoryIdentifier:\\"CONTENT\\" fileInFolderIdentifier: \\"/EDB Upload Docs\\" classIdentifier: \\"Document\\" documentProperties: {name:\\"test1.pdf\\" content:$contvar } checkinAction: {} ) { id name creator } } ", "variables":{"contvar":null}} }'))
    formData.append('contvar', file)

    const request = await fetch('https://cpd-cp4ba-starter.apps.67ab21b0ced9cf7d48cd08f4.ap1.techzone.ibm.com/content-services-graphql/graphql',{
      method: 'POST',
      headers: {
        'ECM-CS-XSRF-Token': 'bcf8cb05-02be-4cfa-9281-271f9bde1694',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',    
        'Authorization': 'Basic Y3A0YWRtaW46a3ZuOU01d0ZxT0NjTHNtNmJZM0E=',
        'Cookie': 'FileNetLtpaToken=icUrddLF6Ic/VXDd24AItV+xpptM3t8Smbv5BZvmL04ermcEKWkzFrLDG6zFKfY4Eoef7JdoaYU/Qsov+c6JQCs74FeM+QrKYYRlu8Hyj4/J1+BGaLSLoXKQ4uEW3Fz+MsSAuE4a8DRyUi0WqQvjgmqVp/v4s0G8oQSXvjo8ZKSzI24C9gKNygvm1oecoW+2xvG4qn15a/97GtTjqVy2xQ6QnFxw70DjcuM/FAICkiEIN7oayLGGjVrdhtHBQsIaRcej0QRW8ohu2jfkhgi6h7GohuT38wid0pBvVS8c9twGxEiYsShQ4SOaqMxSLYb4O8tR2185GC/lkNSD315YR+k5PPZZgFuktYdmsBtCqG/WxOYzNv0krxrDGgafsODk; e455c3d95767478ce576287afa1c54a7=45957175098019799b037d4985e1a801'
      },
      body: formData
    })*/
  
    setMessage("Processing documents... please wait.")
    setIsActive(true)
    setTimeout(()=> {
      setIsActive(false)
      router.push('/apply/reviewform')
    },5000)
   
  }

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
        <ProgressIndicator spaceEqually style={{ width: "50%" }}>
          <ProgressStep current label="Upload Files" />
          <ProgressStep label="Auto Fill Form" />
          <ProgressStep label="Review and Edit Form" />
          <ProgressStep label="Submit Form" />
        </ProgressIndicator>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "5rem",
        }}
      >
        <div>
          <div className="cds--file__container">
            <FileUploader
              accept={[".jpg", ".png", ".pdf"]}
              buttonKind="primary"
              buttonLabel="Add file"
              filenameStatus="edit"
              multiple
              iconDescription="Delete file"
              labelDescription="Max file size is 10mb. Supported file types are .pdf .jpg and .png."
              labelTitle="Upload files"
              name="doc"
              onChange={handleFileChange}
              onClick={() => {}}
              onDelete={ () => setFile(null)}
              size="md"
            />
            {
              file ?  <Button 
               
                  className="btn"
                  renderIcon={CloudUpload} 
                  style={{marginTop: '3rem'}}
                  onClick={handleSubmit}
                >
                    Upload
                </Button> : <></>

            }
           
          </div>
        </div>
      </div>
    </>
  );
}
