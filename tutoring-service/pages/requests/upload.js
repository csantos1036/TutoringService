import React, { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import Axios from 'axios'

export default function Upload() {
    const [myfile, setFile] = useState(null)
    const acceptableFiles = ['docx', 'pdf', 'ppt', 'pptx', 'txt']
    const awardedPoints = 2


    const upload = (event) => {
        event.preventDefault()
        event.target[0].value = ''
        const selectedSubject = event.target[1].value
        event.target[1].value = "Trigonometry"
        let data = new FormData()
        data.append('userId', 1) // props.userId
        data.append('points', awardedPoints)
        data.append('subject', selectedSubject)
        data.append('file', myfile)
        Axios.post('http://localhost:3001/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {})
        alert('Form uploaded!')
    }

    const verifyFile = (event) => {
        const splitFileName = event.target.value.split('.');
        if (splitFileName.length !== 2 || !acceptableFiles.includes(splitFileName[1].toLowerCase())) {
            alert('Please upload file in acceptable format')
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
                        <br/>
                        <label> Subject:
                            <br/>
                            <select>
                                <option value="Trigonometry" selected>
                                    Trigonometry
                                </option>
                                <option value="Pre-calculus">
                                    Pre-calculus
                                </option>
                                <option value="Algebra">
                                    Algebra
                                </option>
                                <option value="Linear Algebra">
                                    Linear Algebra
                                </option>
                                <option value="Health Sciences">
                                    Health Sciences
                                </option>
                                <option value="Statistics">
                                    Statistics
                                </option>
                                <option value="Chemistry">
                                    Chemistry
                                </option>
                                <option value="Biology">
                                    Biology
                                </option>
                            </select>
                            <br/>
                        </label>
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