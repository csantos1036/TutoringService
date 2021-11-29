import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function Tutor() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Tutor</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div class="rectangle">
                    <h2>
                        <Link href="user-profile">
                            <a>User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="student">
                            <a>Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="tutor">
                            <a class="current">Tutor</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Tutor</h1>

                <Link href="../requests/view-student-matches">
                      <a>
                        <button class="loginButton" variant="primary">
                            View Matches
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