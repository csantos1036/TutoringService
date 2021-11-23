import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Student() {
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
                            <a class ="active">Student</a>
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

                <p> Name: </p>
                <p> Subject Stengths: </p>
                <p> Subject Needs: </p>
                <p> Preferred Method of Tutoring: </p>
            </Layout>
        </>
      )
}