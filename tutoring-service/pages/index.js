// File - /pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

export default function Home() {
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
                        <FormControl type="text" placeholder="useremail@domain.com" className="mr-sm-2" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                        <FormControl type="password" className="mr-sm-2" />
                    </FormGroup>
                    <Link href="profiles/user-profile">
                      <a>
                        <button class="loginButton" variant="primary">
                          Sign In
                        </button>
                      </a>
                    </Link>
                </Form>
            </div>
        </Layout>
      </>
  )
}