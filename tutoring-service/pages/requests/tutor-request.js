import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function TutorRequest() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Tutor Request</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div class="rectangle">
                    <h2>
                        <Link href="../profiles/user-profile">
                            <a>User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="../profiles/student">
                            <a class ="current">Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="../profiles/tutor">
                            <a>Tutor</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Tutor Request</h1>

                <h2>Redeemable Points: </h2>

                
                <Link href="../profiles/student">
                    <a>
                        <button class="loginButton" variant="primary">
                          Submit
                        </button>
                    </a>
                </Link>


                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
      )
}