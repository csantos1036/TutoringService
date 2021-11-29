// File - /pages/index.js
import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import Axios from 'axios'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userId, setUserId] = useState(0)

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      loginEmail: email,
      loginPassword: password
    }).then((response) => {
      if (response.data[0] === 'valid') {
        setUserId(response.data[1])
        console.log("Hello")
        window.location.assign(`http://localhost:3000/profiles/user-profile?userId=${response.data[1]}`)
      }
    })
  }

  return (
      <>
        <Head>
          <title>Login Page</title>
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form>
                    <h1 class="signUp">Login</h1>
                    <FormGroup>
                        <FormLabel>
                          <div class="signUpSubForm">
                            Email
                          </div>
                        </FormLabel>
                        <FormControl type="text"
                          placeholder="useremail@domain.com"
                          className="textBox"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                          <div class="signUpSubForm">
                            Password 
                            </div>
                          </FormLabel>
                          <FormControl
                            type="password"
                            className="textBox"
                            onChange={(event) => setPassword(event.target.value)}
                          />
                    </FormGroup>
                    <div class = "details">
                      <Link href="/"><a>Forgot Password?</a></Link>
                    </div>
                        <Button className="loginButton" variant="primary" onClick={login}>
                          Login
                        </Button>
                </Form>
                <div class ="details">
                    Don't have an account? Create one <Link href="signup"><a>here</a></Link>.
                </div>
            </div>
        </Layout>
      </>
  )
}