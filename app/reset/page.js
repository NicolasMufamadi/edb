'use client'
import { ArrowRight } from "@carbon/icons-react";
import { Button, FormGroup, TextInput } from "@carbon/react";

export default function ResetPassword() {
    return (
        <div className="container">
            <div className="note">
                <h3 className="note-header">Take note of the following</h3>
                    <p className="text">To reset your account password, please follow the steps bellow:</p>
                <div className="text">
                    <ol>
                        <li>{`1. Enter the registered email address for your account, and press "Submit".`}</li>
                        <li>{`2. Access your mailbox and open the link in the password reset message from "Mauritius Business Licensing"`}.</li>
                        <li>{`3. Click on "Request Code" to receive an SMS Confirmation Code on your mobile phone`}</li>
                        <li> 4. Enter the SMS Confirmation Code on the current web page and specify a new password.</li>
                        <li> 5. Login using your registered email address and your new password.</li>
                    </ol>
                </div>
                    <p className="text-2">Please safeguard your password to prevent unauthorised access to your NELS account.</p>
            </div>
            <div style={{marginTop: '2.96rem'}}>
                <h3 style={{textAlign: 'center'}}>Reset Password</h3>
                <FormGroup>
                    <TextInput placeholder="Email" labelText="E-Mail" style={{width: '400px'}} />
                    <Button  className="reset-btn" renderIcon={ArrowRight}>Submit</Button>
                    <Button kind='tertiary' className="reset-btn">Cancel</Button>
                </FormGroup>
            </div>
        </div>
    )
}