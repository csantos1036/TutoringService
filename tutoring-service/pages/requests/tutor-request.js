import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function TutorRequest() {
    const [userId, setUserId] = useState('')
    const [points, setPoints] = useState('')
    const [method, setMethod] = useState('')
    const pointsDeducted = 5

    const getUserId = () => {
        Axios.get('http://localhost:3001/getuserid').then((response) => {
            populateUser(response.data[0])
            setUserId(response.data[0])
        })
    }
    
    const populateUser = (userId) =>
    {
        Axios.post('http://localhost:3001/userprofile', {
            userId: userId 
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
                setMethod(response.data[1].method)
            }
        })
    }

    const removePoints = () => {
        Axios.post('http://localhost:3001/removepoints', {
            userId: userId, 
            pointsDeducted: pointsDeducted
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
            }
        })
    }

    const postRequest = () => {
        Axios.post('http://localhost:3001/request', {
            userId: userId,
            method: method
        }).then((response) => {})
    }

    useEffect(() => {
        getUserId()
    }, [])

    const handleSubmit = () => {
        if (points < 5) {
            alert(`Not enough points, you can tutor or upload materials to reach ${pointsDeducted} points again!`)
            return
        }
        removePoints()
        postRequest()
        alert('Request made!')
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Tutor Request</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div class="rectangle">
                    <h2>
                        <Link href="../profiles/user-profile">
                            <a>User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="../profiles/student">
                            <a class ="current">Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="../profiles/tutor">
                            <a>Tutor</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Tutor Request</h1>

                <h2>Redeemable Points: {points} </h2>

                <form>
                    <button onClick={handleSubmit} >
                        Send a Tutor Request
                    </button>
                </form>


                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
    )
}
