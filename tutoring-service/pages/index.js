// File - /pages/index.js
import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      loginEmail: email,
      loginPassword: password
    }).then((response) => {
      console.log(response)
      if (response.data === 'valid') {
        console.log('hey')
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
                <Form className="form-signin">
                    <h1>Login</h1>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text"
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="useremail@domain.com"
                          className="mr-sm-2"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                        <FormControl
                          onChange={(event) => setPassword(event.target.value)}
                          type="password"
                          className="mr-sm-2"
                        />
                    </FormGroup>
                    <Link href="profiles/user-profile">
                        <Button onClick={login} className="loginButton" variant="primary">
                          Sign In
                        </Button>
                    </Link>
                </Form>
            </div>
        </Layout>
      </>
  )
}