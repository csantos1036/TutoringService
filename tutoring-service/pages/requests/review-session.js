import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup, Dropdown } from 'react-bootstrap'

export default function ReviewSession() {
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
                
                <h1>Review Session</h1>

                <div class = "center">
                    <Form>
                        <FormGroup>
                            <FormLabel> Tutors: </FormLabel>
                                <select >
                                    <option value = "-1" selected>[select]</option>
                                    <option value="0">Tutor #1 - Chemistry</option>
                                    <option value="1">Tutor #2 - Math</option>
                                </select>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Rate from 1 (Not Helpful) to 5 (Very Helpful):
                            </FormLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Additional Comments: 
                            </FormLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                        <Link href="../profiles/student">
                            <a>
                                <Button className="loginButton" variant="primary">
                                    Submit
                                </Button>
                            </a>
                        </Link>
                    </Form>
                </div>

                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
      )
}