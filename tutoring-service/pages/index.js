// File - /pages/index.js
import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Home() {
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
                          />
                    </FormGroup>
                    <div class = "details">
                      <Link href="/"><a>Forgot Password?</a></Link>
                    </div>
                    <Link href="profiles/user-profile">
                      <a>
                        <Button className="loginButton" variant="primary">
                          Login
                        </Button>
                      </a>
                    </Link>
                </Form>
                <div class ="details">
                    Don't have an account? Create one <Link href="signup"><a>here</a></Link>.
                </div>
            </div>
        </Layout>
      </>
  )
}