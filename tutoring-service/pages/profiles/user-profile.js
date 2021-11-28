import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function UserForm() {
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

  const handleSubmit = () => {
      
  }

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
                </h2>
            </div>
            
            <h1>
                User Profile 
            </h1>
            
            <h3>
                Point Balance: 
            </h3>

            <p> Name: </p>


            <div class = "left">
            <form onSubmit={handleSubmit}>
                <label> Subject Stengths:
                    <select 
                        multiple={true}
                    >
                        <option value = "-1" selected>[select]</option>
                        <option value="0">Trigonometry</option>
                        <option value="1">Pre-calculus</option>
                        <option value="2">Algebra</option>
                        <option value="3">Linear Algebra</option>
                        <option value="4">Health Sciences</option>
                        <option value="5">Statistics</option>
                        <option value="6">Chemistry</option>
                        <option value="7">Biology</option>
                    </select>
                </label>
                <div></div>
                <label> Subject Needs: 
                    <select 
                        multiple={true}
                    >
                        <option value = "-1" selected>[select]</option>
                        <option value="0">Trigonometry</option>
                        <option value="1">Pre-calculus</option>
                        <option value="2">Algebra</option>
                        <option value="3">Linear Algebra</option>
                        <option value="4">Health Sciences</option>
                        <option value="5">Statistics</option>
                        <option value="6">Chemistry</option>
                        <option value="7">Biology</option>
                    </select>
                </label>
                <div></div>
                <label> Preferred Method of Tutoring: 
                    <select name = "Subject Stengths">
                                <option value = "-1" selected>[select]</option>
                                <option value="0">Online</option>
                                <option value="1">Face to Face</option>
                    </select>
                </label>
                <div></div>
                <input type="submit" value="Submit" />
            </form>
            </div>

            <Link href="../requests/upload">
                      <a>
                        <button class="loginButton" variant="primary">
                            Upload Presentation or Quizzes
                        </button>
                      </a>
            </Link>

            <Link href="../requests/view-material">
                      <a>
                        <button class="loginButton" variant="primary">
                            View Study Material
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
