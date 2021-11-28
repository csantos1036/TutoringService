import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

export default function ViewMaterial() {
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
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
                    <li class = "text_align">Jane Doe uploaded TrigQuiz.pdf for Trigonometry!  Click file to view.</li>
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