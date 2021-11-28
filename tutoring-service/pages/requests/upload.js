import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function Upload() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Upload Files</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div class="rectangle">
                    <h2>
                        <Link href="../profiles/user-profile">
                            <a class="current">User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="../profiles/student">
                            <a>Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="../profiles/tutor">
                            <a>Tutor</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Upload</h1>

                <div class = "uploadText">
                    Acceptable files: docx, pdf, ppt, txt
                </div>

                <div class = "center">
                    <Form>
                        <label for="myfile">Select a file:</label>
                        <input type="file" id="myfile" name="myfile"/>
                    </Form>
                </div>
                
                <button class="loginButton" variant="primary">
                    Submit 
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