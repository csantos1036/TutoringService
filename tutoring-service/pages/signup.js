// File - /pages/index.js
import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import Axios from 'axios'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')

  const validEmailDomains = [
    'hotmail.com',
    'gmail.com',
    'live.com',
    'yahoo.com'
  ]

  const postToDB = () => {
    Axios.post('http://localhost:3001/register', {
      registerEmail: email,
      registerPassword: password1,
      registerName: name
    }).then((response) => {})
  }

  const submit = () => {
    const splitEmailArr = email.split("@")
    if (splitEmailArr.length !== 2 ||
        splitEmailArr[0].length === 0 ||
        !validEmailDomains.includes(splitEmailArr[1])) {
      console.log("Invalid email")
      return;
    } else if (password1.length === 0 || password1 !== password2) {
      console.log("Passwords do not match")
    } else if (name.length === 0) {
      console.log('Enter a name')
    } else {
      postToDB();
    }
  }

  return (
      <>
        <Head>
          <title>Sign Up</title>
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin">
                    <h1 class="signUp">Sign Up</h1>
                    <FormGroup>
                        <FormLabel>
                          <div class="signUpSubForm">
                            Email
                          </div>
                        </FormLabel>
                        <FormControl 
                          type="text" 
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
                        onChange={(event) => setPassword1(event.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                            <div class="signUpSubForm">
                                Verify Password
                            </div>
                          </FormLabel>
                      <FormControl
                        type="password"
                        className="textBox"
                        onChange={(event) => setPassword2(event.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                            <div class="signUpSubForm">
                                Full Name
                            </div>
                          </FormLabel>
                      <FormControl 
                        type="name"
                        className="textBox"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </FormGroup>
                    
                    <Link href="profiles/user-profile">
                      <a>
                        <button onClick={submit} class="loginButton" variant="primary">
                          Submit
                        </button>
                      </a>
                    </Link>
                </Form>
            </div>
        </Layout>
      </>
  )
}