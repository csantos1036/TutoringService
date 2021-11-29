import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup, Dropdown } from 'react-bootstrap'
import Axios from 'axios'

export default function ReviewSession() {
    const [matches, setMatches] = useState([])
    const [name, setName] = useState('')
    const [userId, setUserId] = useState('')
    const [tutorUserId, setTutorUserId] = useState(1)
    const [userMap, setUserMap] = useState(null)
    const [points, setPoints] = useState('')
    const [pointsAdded, setPointsAdded] = useState('')
    const [deleteMatch, setDeleteMatch] = useState(false)
    const [deleteTutorUser, setDeleteTutorUser] = useState('')

    const getUserId = () => {
        Axios.get('http://localhost:3001/getuserid').then((response) => {
            populateMatches(response.data[0])
            setUserId(response.data[0])
        })
    }
    
    const populateMatches = (userId) => {
        Axios.post('http://localhost:3001/matchtutors', {
            userId : userId,
        }).then((response) => {
            setMatches(response.data)
            const map = new Map()
            let id = 1
            response.data.forEach((x, i) => {
                if (i === 0) {
                    id = x.userId
                    setTutorUserId(x.userId)
                }
                map.set(x.userId, x)
            })
            setUserMap(map)
        })
    }

    const isSelected = (userId) => {
        return (userId === tutorUserId)
    }

    const addPoints = () => {
        Axios.post('http://localhost:3001/addpoints', {
            userId: tutorUserId, 
            pointsAdded: pointsAdded
        }).then((response) => {
            if (response.data[0] === 'valid') {
                setPoints(response.data[1].points)
            }
        })
    }

    function MaterialList(props) {
        let ListOfItems = []
        props.matches.forEach((x, i) => {
            if (deleteMatch && deleteTutorUser == x.userId) {

            }
            else {
                ListOfItems.push(
                    <option value={x.userId} selected={isSelected(x.userId)}>{x.name}</option>
                )
            }
        })
        return (
            ListOfItems
        )
    }

    useEffect(() => {
        getUserId()
    }, [])

    const changeTutor = (userId, userMap) => {
        if (userMap === null) return;
        Axios.post('http://localhost:3001/subjectstrength', {
            userId : userId,
        }).then((response) => {
            if (response.data[0] = 'valid') {
                setTutorUserId(userId)
            }
        })
    }

    const handleOnChange = (event) => {
        event.preventDefault()
        changeTutor(parseInt(event.target.value), userMap)
    }

    const handleSubmit = () => {
        addPoints()
        alert('Review sent!')
        setDeleteMatch(true)
        setDeleteTutorUser(tutorUserId)
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
                
                <h1>Review Session</h1>

                <div class = "center">
                    <Form>
                        <div class = "left">
                        <FormGroup>
                            <FormLabel> Tutors: </FormLabel>
                            <select onChange={handleOnChange}>
                                <option value = "-1" selected>[select]</option>
                                <MaterialList matches={matches}></MaterialList>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>
                                Rate from 1 (Not Helpful) to 5 (Very Helpful):
                            </FormLabel>
                            <FormControl 
                                type="number"
                                min="1" 
                                max="5"
                                onChange={(event) => setPointsAdded(event.target.value)}
                            />
                        </FormGroup>
                        </div>
                            <a>
                                <Button onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </a>
                    </Form>
                </div>

                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
      )
}