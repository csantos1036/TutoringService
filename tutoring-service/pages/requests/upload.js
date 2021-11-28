import React, { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import Axios from 'axios'

export default function Upload() {
    const [myfile, setFile] = useState(null)

    const upload = (event) => {
        event.preventDefault()
        let data = new FormData()
        data.append('userId', 1)
        data.append('file', myfile)
        Axios.post('http://localhost:3001/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {})
    }

    const verifyFile = (event) => {
        const splitFileName = event.target.value.split('.');
        if (splitFileName.length !== 2 || splitFileName[1] !== 'pdf') {
            alert('Please upload file in pdf format')
            event.target.value = ''
        } else {
            setFile(event.target.files[0])
        }
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Upload Files</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div className="rectangle">
                    <h2>
                        <Link href="../profiles/user-profile">
                            <a className="current">User Profile</a>
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

                <div className = "uploadText">
                    Acceptable files: docx, pdf, ppt, txt
                </div>

                <div className = "center">
                    <Form onSubmit={upload}>
                        <label htmlFor="myfile">Select a file:</label>
                        <input onChange={verifyFile} type="file" id="myfile" name="myfile" required/>
                        <button type='submit' className="loginButton" variant="primary">
                            Submit 
                        </button>
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