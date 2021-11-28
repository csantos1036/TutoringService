// File - /pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function SignUp() {
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
                        <FormControl type="text" placeholder="useremail@domain.com" className="textBox" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                          <div class="signUpSubForm">
                            Password 
                            </div>
                          </FormLabel>
                      <FormControl type="password" className="textBox" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                            <div class="signUpSubForm">
                                Verify Password
                            </div>
                          </FormLabel>
                      <FormControl type="password" className="textBox" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>
                            <div class="signUpSubForm">
                                Full Name
                            </div>
                          </FormLabel>
                      <FormControl type="name" className="textBox" />
                    </FormGroup>
                    
                    <Link href="profiles/user-profile">
                      <a>
                        <button class="loginButton" variant="primary">
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