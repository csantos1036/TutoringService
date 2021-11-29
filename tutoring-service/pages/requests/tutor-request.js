import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function TutorRequest() {
    const [points, setPoints] = useState(0)
    const [method, setMethod] = useState('')
    const pointsDeducted = 5
    
    const populateUser = () =>
    {
        Axios.post('http://localhost:3001/userprofile', {
            userId: 1, // urlParams.get('userId') 
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
                setMethod(response.data[1].method)
            }
        })
    }

    const removePoints = () => {
        Axios.post('http://localhost:3001/removepoints', {
            userId: 1, // urlParams.get('userId') 
            pointsDeducted: pointsDeducted
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
            }
        })
    }

    const postRequest = () => {
        Axios.post('http://localhost:3001/request', {
            userId: 1, // urlParams.get('userId') 
            pointsDeducted: pointsDeducted
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
            }
        })
    }

    useEffect(() => {
        populateUser()
    }, [])

    const handleSubmit = () => {
        if (points < 5) {
            alert('Not enough points, you can tutor to reach 5 again!')
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
