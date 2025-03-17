'use client'
import { useState } from "react"
import { ArrowRight } from "@carbon/icons-react"
import { FormGroup, Stack, TextInput, Button, PasswordInput } from "@carbon/react"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function Login() {

    const [username, setUsername] = useState('');

    const login = () => {
        localStorage.setItem('username',username);
        window.location.href = '/';
    }

    return(
        <section style={{marginBottom: '6rem'}}>
            <h4 className="login-header">Login</h4>
            <FormGroup style={{display: 'flex',justifyContent: 'center'}}>
                <Stack gap={5}>
                    <TextInput id="username" type="text" labelText="Username" size="lg" placeholder="Username" style={{width: '350px'}} onChange={(e) => setUsername(e.target.value) }/>
                    <PasswordInput id="password" type="password" labelText="Password" size="lg" placeholder="Password" style={{width: '350px'}}/>
                    <Link href='/reset' className="reset-link">Forgot Password</Link>
                    <div style={{display: "flex",justifyContent: 'center'}}>
                        <Button className="btn" kind="tertiary" style={{marginRight:  '2.25rem'}}>Cancel</Button>
                        <Button className="btn" renderIcon={ArrowRight} onClick={login}>Login</Button>
                    </div>
                </Stack>
            </FormGroup>
        </section>
    )

}