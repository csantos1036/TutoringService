import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function Tutor() {
  const [status, setStatus] = useState('')
  const [subjectStrengths, setSubjectStrengths] = useState([])

  const populateTutor = () => {
    Axios.post('http://localhost:3001/userprofile', {
        userId : 1 // props.userId
    }).then((response) => {
        if (response.data[0] === 'valid') {
            setStatus(response.data[1].status)
        }
    })

    Axios.post('http://localhost:3001/subjectstrength', {
        userId : 1 // props.userId
    }).then((response) => {
      if (response.data[0] === 'valid') {
        setSubjectStrengths(response.data[1])
      }
    })
  }

  useEffect(() => {
    populateTutor()
  }, [])

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

                <Link href="../requests/student-requests">
                      <a>
                        <button class="loginButton" variant="primary">
                            Student Requests
                        </button>
                      </a>
                </Link>
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