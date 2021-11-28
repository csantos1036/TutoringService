import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function UserProfile() {
  const [points, setPoints] = useState(0)
  const [name, setName] = useState('')
  const [subjectStrengths, setSubjectStrengths] = useState([])
  const [subjectNeeds, setSubjectNeeds] = useState([])

  const populateUserProfile = () => {
    Axios.post('http://localhost:3001/userprofile', {
        userId : 1 // props.userId
    }).then((response) => {
        if (response.data[0] === 'valid') {
            setPoints(response.data[1].points)
            setName(response.data[1].name)
        }
    })

    Axios.post('http://localhost:3001/subjectstrength', {
        userId : 1 // props.userId
    }).then((response) => {
      if (response.data[0] === 'valid') {
        setSubjectStrengths(response.data[1])
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
    populateUserProfile()
  }, [])

  return (
    <>
        <Layout>
            <Head>
                <title>User Profile</title>
            </Head>

            <h1>Tutoring Service</h1>
            
            <div className="rectangle">
                <h2>
                    <Link href="user-profile">
                        <a className="current">User Profile</a>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link href="student">
                        <a>Student</a>
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
            
            <h1>
                User Profile 
            </h1>

            <h3>
            Point Balance: {points}
            </h3>

            <p> Name: {name} </p>
            <p> Subject Stengths: {subjectStrengths} </p>
            <p> Subject Needs: {subjectNeeds} </p>
            <p> Preferred Method of Tutoring: </p>

            <button type="button">Upload Presentation or Quizzes</button>
            <button type="button">View Study Materials</button>


            <footer>
                <Link href="/">
                        <a>Logout</a>
                </Link>
            </footer>
            

        </Layout>

    </>
  )
}
