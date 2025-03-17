'use client'
import { ArrowRight } from "@carbon/icons-react";
import 
{ 
    Form, 
    TextArea,
    Button,
    TextInput,
    RadioButtonGroup,
    Stack,
    FormGroup,
    RadioButton 
} from "@carbon/react";
import { useEffect, useState } from "react";


export default function LogIssues() {

    const [data, setData] = useState({
        name: "",
        email: "",
        reason: "Technical",
        message: ""
    })
    const [disabled, setDisabled] =useState(true)

    useEffect(() => {
        if((data.name && data.email && data.reason && data.message) != ""){
            setDisabled(false)
        }
    },[data])

    return (
        <div>
            <h1 className="ticketHeader">Create a Ticket</h1>
            <div style={{display: 'flex', marginBottom: '5rem'}}>
                <div className="ticket-note">
                    <h6 className="note-header">Take note of the following</h6>
                    <p className="text">
                        To reset your account password, please follow the steps bellow:
                    </p>
                    <ol className="text">
                        <h6 style={{marginBottom: '1rem'}}>Technical Ticket:</h6>
                        <li>{`1. Enter the registered email address for your account, and press "Submit".`}</li>
                        <li>{`2. Access your mailbox and open the link in the password reset message from "Mauritius Business Licensing".`}</li>
                        <h6 style={{marginBottom: '1rem',marginTop: '1rem'}}>Application Process Ticket:</h6>
                        <li>{`3. Click on "Request Code" to receive an SMS Confirmation Code on your mobile phone.`}</li>
                        <li>{`4. Enter the SMS Confirmation Code on the current web page and specify a new password. Login using your registered email address and your new password`}</li>
                    </ol>
                    <p className="text">Please safeguard your password to prevent unauthorised access to your NELS account.</p>
                   
                </div>
                <div style={{marginLeft: '6.12rem',marginTop: '1.5rem'}}>
                    <FormGroup style={{display: 'flex'}}>
                        <TextInput 
                            type="text" 
                            labelText="Name" 
                            style={{marginRight: '1rem'}}
                            value={data.name}
                            onChange={(e) => setData({...data, name: e.target.value})}
                        />
                        <TextInput 
                            type="email" 
                            labelText="email"
                            value={data.email} 
                            onChange={(e) => setData({...data, email: e.target.value})}
                        />
                    </FormGroup>
                        <RadioButtonGroup 
                          warnText="Warning message goes here"
                          invalidText="Error message goes here"
                          legendText="How would you categorise your issue?"
                          style={{marginTop: '1.5rem'}}
                          valueSelected={data.reason}
                          onChange={(e) => setData({...data, reason: e})}
                        >
                            <RadioButton
                                labelText="Technical"
                                value="Technical"
                                id="radio-1"
                            />
                            <RadioButton 
                                labelText="Application Process" 
                                value="Application Process" 
                                id="radio-2"
                            />
                            <RadioButton 
                                labelText="I don't Know" 
                                value="I don't know"
                                id="radio-3"
                            />
                        </RadioButtonGroup>
                        
                        <div style={{marginTop: "1.5rem"}}>
                            <TextArea 
                                labelText="message" 
                                value={data.message}
                                onChange={(e) => setData({...data, message: e.target.value})}
                            />
                        </div>

                        <div  style={{marginTop: "1.5rem", display: 'flex',justifyContent: 'space-around'}}>
                            <Button className="btn" kind="tertiary" size="lg">Cancel Ticket</Button>
                            <Button className="btn" kind="primary" size="lg" disabled={disabled} renderIcon={ArrowRight}>Submit Ticket</Button>
                        </div>
                </div>
            </div>
        </div>
    )
}