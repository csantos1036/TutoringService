import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function Student() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Student</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div class="rectangle">
                    <h2>
                        <Link href="user-profile">
                            <a>User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="student">
                            <a class ="current">Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="tutor">
                            <a>Tutor</a>
                        </Link>
                    </h2>
                </div>

                <h1>Student</h1>

                <Link href="../requests/tutor-request">
                      <a>
                        <button class="loginButton" variant="primary">
                            Tutor Request
                        </button>
                      </a>
                </Link>
                <Link href="../requests/view-matches">
                      <a>
                        <button class="loginButton" variant="primary">
                            View Matches
                        </button>
                      </a>
                </Link>
                <Link href="../requests/review-session">
                      <a>
                        <button class="loginButton" variant="primary">
                            Review Session
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