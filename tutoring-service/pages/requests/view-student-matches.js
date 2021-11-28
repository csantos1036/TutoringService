import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import React, { Component } from "react";

export default function ViewMatches() {
        return (
            <>
                <Layout>
                    <Head>
                        <title>View Matches</title>
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
                                <a class ="current">Tutor</a>
                            </Link>
                        </h2>
                    </div>
                    
                    <h1>View Matches</h1>

                    <div class = "dropdownLabel">
                    <form>
                        <label> Confirmed Matches:
                            <select >
                                <option value = "-1" selected>[select]</option>
                                <option value="0">Student #1 - Chemistry</option>
                                <option value="1">Student #2 - Math</option>
                            </select>
                        </label>
                    </form>
                    </div>

                    <h1>Student Info:</h1>

                    <p>Name: </p>
                    <p>Subject: </p>
                    <p>Email: </p>


                    <footer>
                        <Link href="/">
                                <a>Logout</a>
                        </Link>
                    </footer>

                </Layout>
            </>
        )
}
