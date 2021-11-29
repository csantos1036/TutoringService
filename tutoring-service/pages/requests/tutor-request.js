import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import React, { Component, Redirect } from "react";
const addStudentRequestID = () => {
    Axios.post("http://localhost:3000/requests/tutor-request" , {
        requestId: requestId,
    }).then(() => {
        console.log("success");
    });
};

class TutorRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Request Sent');
        event.preventDefault();
      }
    
    render() {
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

                    <h2>Redeemable Points: </h2>

                    <form>
                        <button onClick={addStudentRequestID,this.handleSubmit} >
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
}

export default TutorRequest;

