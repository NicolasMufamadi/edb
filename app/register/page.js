'use client'
import { ArrowRight } from "@carbon/icons-react";
import { Button, FormGroup, Select, SelectItem, Stack, TextInput } from "@carbon/react";

export default function Register () {

    const register = () => {
        window.location.href = '/login';
    }

   return(
    <div className="container">
        <div className="note">
            <h3 className="note-header">Take note of the following</h3>
            <div className="text-wrap">
            <p className="text">For security and identification purposes, we need to validate both your email address and your mobile phone number before creating your user account.</p>
            <p className="text">Your user account will be identified by the email address which you provide below and will be required for login on the National E-Licensing System. </p>
            <p className="text">We recommend that you register with your work email address when representing a company, or your personal email address when acting as an individual.
               During registration, an SMS token will be sent to your mobile number for validation and will expire after 24 hours.  
            </p>
            </div>
        </div>
        <div style={{marginTop: '2.96rem'}}>
            <h3 style={{textAlign: 'center'}}>Register</h3>
            <FormGroup style={{display: 'flex', marginTop: "2.25rem"}}>
                <TextInput labelText="First Name" style={{marginRight: '1.88rem'}}/>
                <TextInput labelText="Last Name" />
            </FormGroup>

            <FormGroup  style={{display: 'flex', marginTop: "0.25rem"}}>
                <Select style={{marginRight: '1.88rem'}} labelText="Title">
                    <SelectItem  text="Choose an option" />
                    <SelectItem text="Mr" />
                    <SelectItem text="Miss" />
                    <SelectItem text="Mrs" />
                </Select>
                <Select labelText="Gender">
                    <SelectItem  text="Choose an option" />
                    <SelectItem text="M" />
                    <SelectItem text="F" />
                </Select>
            </FormGroup>

            <FormGroup style={{display: 'flex', marginTop: "0.25rem"}}>
                    <TextInput labelText="E-mail" style={{marginRight: '1.88rem'}}/>
                    <TextInput labelText="Cellphone Number" />
            </FormGroup>
            <div style={{display: "flex",justifyContent: 'center',marginTop: "1.38rem"}}>
                <Button kind="tertiary" style={{marginRight:  '2.25rem'}}>Cancel</Button>
                <Button  renderIcon={ArrowRight} onClick={register}>Register</Button>
            </div>
        </div>
    </div>
   ) 
}