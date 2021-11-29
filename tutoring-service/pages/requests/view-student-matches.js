import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import Axios from 'axios'

export default function ViewMatches() {
    const [matches, setMatches] = useState([])
    const [name, setName] = useState('')
    const [subjects, setSubjects] = useState('')
    const [email, setEmail] = useState('')
    const [userMap, setUserMap] = useState(null)
    const [studentUserId, setStudentUserId] = useState(1)

    const getUserId = () => {
        Axios.get('http://localhost:3001/getuserid').then((response) => {
            populateMatches(response.data[0])
        })
    }

    const populateMatches = (userId) => {
        Axios.post('http://localhost:3001/matchstudents', {
            userId : userId,
        }).then((response) => {
            setMatches(response.data)
            const map = new Map()
            let id = 1
            response.data.forEach((x, i) => {
                if (i === 0) {
                    id = x.userId
                    setStudentUserId(x.userId)
                }
                map.set(x.userId, x)
            })
            setUserMap(map)
            displayUser(id, map)
        })
    }

    const handleOnChange = (event) => {
        displayUser(parseInt(event.target.value), userMap)
    }

    const subjectsToString = (subjects) => {
        let str = ''
        let i = 0;
        for (; i < subjects.length - 1; i++) {
            str += subjects[i] + ', '
        }
        str += subjects[i]
        return str
    } 

    const displayUser = (userId, userMap) => {
        if (userMap === null) return;
        Axios.post('http://localhost:3001/subjectneed', {
            userId : userId,
        }).then((response) => {
            if (response.data[0] = 'valid') {
                setStudentUserId(userId)
                setSubjects(subjectsToString(response.data[1]))
                setName(userMap.get(userId).name)
                setEmail(userMap.get(userId).email)
            }
        })
    }

    const isSelected = (userId) => {
        return (userId === studentUserId)
    }

    function MaterialList(props) {
        let ListOfItems = []
        props.matches.forEach((x, i) => {
            ListOfItems.push(
                <option value={x.userId} selected={isSelected(x.userId)}>{x.name}</option>
            )
        })
        return (
            ListOfItems
        )
    }

    useEffect(() => {
        getUserId()
    }, [])
    
    return (
        <>
            <Layout>
                <Head>
                    <title>View Matches</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div className="rectangle">
                    <h2>
                        <Link href="../profiles/user-profile">
                            <a>User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="../profiles/student">
                            <a>Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="../profiles/tutor">
                            <a className ="current">Tutor</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>View Matches</h1>

                <div className = "dropdownLabel">
                <form>
                    <label> Confirmed Matches:
                        <select onChange={handleOnChange}>
                            <MaterialList matches={matches}></MaterialList>
                        </select>
                    </label>
                </form>
                </div>

                <h1>Student Info:</h1>

                <p>Name: {name} </p>
                <p>Subject Needs: {subjects} </p>
                <p>Email: {email} </p>


                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>

            </Layout>
        </>
    )
}
