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
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="login-wrap">
                <Form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                        <Button className="btn-lg btn-block" variant="primary">
                          Sign In
                        </Button>
                      </a>
                    </Link>
                </Form>
            </div>
        </Layout>
      </>
  )
}