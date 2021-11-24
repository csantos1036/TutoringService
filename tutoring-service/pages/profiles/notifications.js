import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Notifcations() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Notifications</title>
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
                            <a>Tutor</a>
                        </Link>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link href="notifications">
                            <a class="current"> Notifications</a>
                        </Link>
                    </h2>
                </div>
                
                <h1>Notifications</h1>

                <p> Name: </p>
                <p> Subject Stengths: </p>
                <p> Subject Needs: </p>
                <p> Preferred Method of Tutoring: </p>

                <footer>
                    <Link href="/">
                            <a>Logout</a>
                    </Link>
                </footer>
            </Layout>
        </>
      )
}