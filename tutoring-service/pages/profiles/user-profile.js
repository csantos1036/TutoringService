import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import Axios from 'axios'

export default function UserProfile() {
    const [points, setPoints] = useState('')
    const [name, setName] = useState('')
    const [method, setMethod] = useState('')
    const [subjectStrengths, setSubjectStrengths] = useState([])
    const [subjectNeeds, setSubjectNeeds] = useState([])

    const getUserId = () => {
        Axios.get('http://localhost:3001/getuserid').then((response) => {
            populateUserProfile(response.data[0])
        })
    }

    const populateUserProfile = (userId) => {
        Axios.post('http://localhost:3001/userprofile', {
            userId : userId 
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
                setName(response.data[1].name)
                setMethod(response.data[1].method)
            }
        })

        Axios.post('http://localhost:3001/subjectstrength', {
            userId : userId
        }).then((response) => {
        if (response.data[0] === 'valid') {
            setSubjectStrengths(response.data[1])
        }
        })

        Axios.post('http://localhost:3001/subjectneed', {
            userId : userId
        }).then((response) => {
        if (response.data[0] === 'valid') {
            setSubjectNeeds(response.data[1])
        }
        })
    }

    useEffect(() => {
        getUserId()
    }, [])

    const handleSubmit = () => {}

    const isSelectedSubjectStrength = (refSubject) => {
      return subjectStrengths.includes(refSubject);
    }
    
    const isSelectedSubjectNeed = (refSubject) => {
        return subjectNeeds.includes(refSubject);
    }

    const isSelectedMethod = (refMethod) => {
        return refMethod === method;
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
                Point Balance: { points }
            </h3>

            <p> Name: { name }</p>

            <div class = "left">
            <Form>
            <label> Subject Strengths:
                    <br/>
                    <select 
                        multiple={true}
                    >
                        <option value="0" selected={isSelectedSubjectStrength('Trigonometry')}>
                            Trigonometry
                        </option>
                        <option value="1" selected={isSelectedSubjectStrength('Pre-calculus')}>
                            Pre-calculus
                        </option>
                        <option value="2" selected={isSelectedSubjectStrength('Algebra')}>
                            Algebra
                        </option>
                        <option value="3" selected={isSelectedSubjectStrength('Linear Algebra')}>
                            Linear Algebra
                        </option>
                        <option value="4" selected={isSelectedSubjectStrength('Health Sciences')}>
                            Health Sciences
                        </option>
                        <option value="5" selected={isSelectedSubjectStrength('Statistics')}>
                            Statistics
                        </option>
                        <option value="6" selected={isSelectedSubjectStrength('Chemistry')}>
                            Chemistry
                        </option>
                        <option value="7" selected={isSelectedSubjectStrength('Biology')}>
                            Biology
                        </option>
                    </select>
                    <br/>
                </label>

                <label> Subject Needs: 
                    <br/>
                    <select 
                        multiple={true}
                    >
                        <option value="0" selected={isSelectedSubjectNeed('Trigonometry')}>
                            Trigonometry
                        </option>
                        <option value="1" selected={isSelectedSubjectNeed('Pre-calculus')}>
                            Pre-calculus
                        </option>
                        <option value="2" selected={isSelectedSubjectNeed('Algebra')}>
                            Algebra
                        </option>
                        <option value="3" selected={isSelectedSubjectNeed('Linear Algebra')}>
                            Linear Algebra
                        </option>
                        <option value="4" selected={isSelectedSubjectNeed('Health Sciences')}>
                            Health Sciences
                        </option>
                        <option value="5" selected={isSelectedSubjectNeed('Statistics')}>
                            Statistics
                        </option>
                        <option value="6" selected={isSelectedSubjectNeed('Chemistry')}>
                            Chemistry
                        </option>
                        <option value="7" selected={isSelectedSubjectNeed('Biology')}>
                            Biology
                        </option>
                    </select>
                </label>
                
                <FormGroup>
                    <FormLabel>Preferred Method of Tutoring:</FormLabel> 
                    <select name = "Subject Stengths">
                                <option value="0" selected={isSelectedMethod('Online')}>Online</option>
                                <option value="1" selected={isSelectedMethod('Face to Face')}>Face to Face</option>
                    </select>
                </FormGroup>
            </Form>
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
