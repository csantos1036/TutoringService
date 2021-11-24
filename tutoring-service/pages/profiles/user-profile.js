import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function UserProfile() {
  return (
    <>
        <Layout>
            <Head>
                <title>User Profile</title>
            </Head>

            <h1>Tutoring Service</h1>

            <div class="rectangle">
                <h2>
                    <Link href="user-profile">
                        <a class="current">User Profile</a>
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
                        <a> Notifications</a>
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
            <p> Subject Stengths: </p>
            <p> Subject Needs: </p>
            <p> Preferred Method of Tutoring: </p>

            <button type="button">Upload Presentation or Quizzes</button>
            <button type="button">View Study Materials</button>

        </Layout>

    </>
  )
}
