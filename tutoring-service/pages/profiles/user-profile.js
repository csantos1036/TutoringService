import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'

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
                </h2>
            </div>
            
            <h1>
                User Profile 
            </h1>
            
            <h3>
                Point Balance: 
            </h3>

            <p> Name: </p>

            <div class = "left">
            <Form>
                <FormGroup>
                    <FormLabel>Subject Strengths:</FormLabel>
                    <FormControl type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Subject Needs:</FormLabel>
                    <FormControl type="text"
                    />
                </FormGroup>

                {/* <label> Subject Needs: 
                    <select 
                        multiple={true}
                    >
                        <option value = "-1" selected>[select]</option>
                        <option value="0">Trigonometry</option>
                        <option value="1">Pre-calculus</option>
                        <option value="2">Algebra</option>
                        <option value="3">Linear Algebra</option>
                        <option value="4">Health Sciences</option>
                        <option value="5">Statistics</option>
                        <option value="6">Chemistry</option>
                        <option value="7">Biology</option>
                    </select>
            
                </label> */}
                
                <FormGroup>
                    <FormLabel>Preferred Method of Tutoring:</FormLabel> 
                    <select name = "Subject Stengths">
                                <option value = "-1" selected>[select]</option>
                                <option value="0">Online</option>
                                <option value="1">Face to Face</option>
                    </select>
                </FormGroup>
            </Form>
            </div>

            <Link href="../requests/upload">
                      <a>
                        <button class="loginButton" variant="primary">
                            Upload Presentation or Quizzes
                        </button>
                      </a>
            </Link>

            <Link href="../requests/view-material">
                      <a>
                        <button class="loginButton" variant="primary">
                            View Study Material
                        </button>
                      </a>
            </Link>
            <footer>
                <Link href="/">
                        <a>Logout</a>
                </Link>
            </footer>
            

        </Layout>

    </>
  )
}

