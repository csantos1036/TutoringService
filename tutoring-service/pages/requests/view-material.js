import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Axios from 'axios'

export default function ViewMaterial() {
    const [materialsList, setMaterialList] = useState([])

    const populateMaterialList = () => {
        Axios.get('http://localhost:3001/materiallist', {
            userId: 1 // props.userId
        }).then((response) => {setMaterialList(response.data)})
    }

    const filePath = (event) => {
        const fileName = event.target.innerText
        Axios.post('http://localhost:3001/filepath', {
            file: fileName
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
    }

    function MaterialList(props) {
        let ListOfItems = []
        props.materialsList.forEach((x, i) => {
            ListOfItems.push(
                <li class = "text_align">{x.name} uploaded <a onClick={filePath}>{x.fileName}</a> for {x.subject}!  Click file to view.</li>
            )
        })
        return (
            <ul>{ListOfItems}</ul>
        )
    }

    useEffect(() => {
        populateMaterialList()
    }, [])

    return (
        <>
            <Layout>
                <Head>
                    <title>View Material</title>
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
                
                <h1>View Study Materials </h1>

                <div class = "display_area">
                    <MaterialList materialsList={materialsList}></MaterialList>
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