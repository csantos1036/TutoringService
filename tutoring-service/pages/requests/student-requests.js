import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function StudentRequest() {
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
                            <a>Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="../profiles/tutor">
                            <a class="current">Tutor</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Student Requests</h1>

                <h2>Earn 10 points!</h2>

                
                <button class="loginButton" variant="primary">
                    Accept
                </button>


                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
      )
}