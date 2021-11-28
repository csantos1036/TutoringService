import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function Student() {
  const [status, setStatus] = useState('')
  const [subjectNeeds, setSubjectNeeds] = useState([])

  const populateStudent = () => {
    Axios.post('http://localhost:3001/userprofile', {
        userId : 1 // props.userId
    }).then((response) => {
        if (response.data[0] === 'valid') {
            setStatus(response.data[1].status)
        }
    })

    Axios.post('http://localhost:3001/subjectneed', {
        userId : 1 // props.userId
    }).then((response) => {
      if (response.data[0] === 'valid') {
        setSubjectNeeds(response.data[1])
      }
    })
  }

  useEffect(() => {
    populateStudent()
  }, [])

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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="notifications">
                            <a> Notifications</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Student</h1>

                <p> Status: {status} </p>
                <p> Subject Needs: {subjectNeeds} </p>
                <p> Preferred Method of Tutoring: </p>

                <button type="button">Request Tutor</button>
                <button type="button">View Matches</button>
                <button type="button">Review Session</button>

                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
      )
}