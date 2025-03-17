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
     
    setIsActive(true)
    setMessage("Processing documents... please wait.")

    const myHeaders = new Headers();
    myHeaders.append("ECM-CS-XSRF-Token", "bcf8cb05-02be-4cfa-9281-271f9bde1694");
    myHeaders.append("Cookie", "FileNetLtpaToken=YW0smLl7Jbrg02qhgjDp9+p1ViDF6Cej7n9nwWKEg4OsOkHau+CA4z8rl/k/rCK5DpWhYHOYVkZiwZcKLSEcyXi+DmTkB2xUkDQ8q1sfgzuBcddtROEqNV0Jgr+Z5qi/Xl14Tl4bfyUdOIqoymPysUCNOAnJdsogVaP5pkqc4w2wfFiAzasmgRhhudvBJ+TDM0xegV+gyieBWwg2SklyY6ftC++f3r0zXHXElqK0izWoXjGUnKoLIWV1dp2OFz72ftXi70hW5AulXBPF/AyJqNBDOxQo8uyFXZSeA0+xvfgvx4YWXsh04KTOFV8MtkkQfSet6LJ//DJOd2axaQ9jFIX93+exUMQuZtDo1AfJqTDGNa0hcpwgti+oMzxBU/nA; e455c3d95767478ce576287afa1c54a7=45957175098019799b037d4985e1a801; WAS_n2052565568=UmU2sdYEZ8D0DTcvywVphXoH99EbcyHBBxUGUCvUBr5G2UawnGuWodtFfTKcqZIB4b587OJg4Cw0HvYnSMf6W7J5mOkXdkCoY0Zg+TKmhyfY/O+4aWjUzW4oqqoDS5gSedyBRMjoAWUTrkrJXWZUlGTt1n5mxarNy/8ISp1P3qp9mrIMcBjheOqvinQfs5h901vFNwaX5nDoIzj/+tCzWzR/3im+tuO/rDF42wo7xX9cKB/IASKEXR84MnaTPtzM4JguLNT4X4UmIaciuWfCn0hxf4zNjFhhf/5UPLYnPcOUVUmCbLqd0tuwCHNRc+ihC615cPir2bx4D/mow0qwoSTZdkvVyh2rkeyT+W8re/zMGOpqvfgySVtuwQ8OmBGG; eb02a6f2d2bb676a8e10d85cde6d2de3=8464ab53b94a363bfab18766cf817549");
    myHeaders.append("Authorization", "Basic Y3A0YWRtaW46MmlNVDlnUGh2dFZmdkFQQkdHVEo=");
    
    const formdata = new FormData();
    formdata.append("graphql", "{\"query\": \"mutation ($contvar:String) {\ndoc1: createDocument(repositoryIdentifier:\\\"CONTENT\\\" fileInFolderIdentifier: \\\"/EDB Documents\\\" classIdentifier: \\\"Document\\\" documentProperties: {name:\\\"test1.pdf\\\" content:$contvar } checkinAction: {} ) { id name creator } } \", \"variables\":{\"contvar\":null}} }");
    formdata.append("contvar", file);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };
    
    fetch("https://cpd-cp4ba.apps.679e70256bfc48909207559e.ocp.techzone.ibm.com/content-services-graphql/graphql", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    setTimeout(()=> {
      setIsActive(false)
      router.push('/apply/autofill')
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
        <ProgressIndicator spaceEqually style={{ width: "85%" }}>
          <ProgressStep current label="Upload Files" />
          <ProgressStep label="Auto Fill Form" />
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
