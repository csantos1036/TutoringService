import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Tutor() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Tutor</title>
                </Head>

                <h1>Tutoring Service</h1>

                <div class="rectangle">
                    <h2>
                        <Link href="user-profile">
                            <a>User Profile</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="student">
                            <a>Student</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <Link href="tutor">
                            <a class="current">Tutor</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="notifications">
                            <a> Notifications</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Tutor</h1>

                <p> Status: </p>
                <p> Subject Stengths: </p>
                <p> Preferred Method of Tutoring: </p>

                <button type="button">Request Student</button>
                <button type="button">View Matches</button>
        </Layout>
        </>
      )
}