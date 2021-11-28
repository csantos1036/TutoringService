import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import React, { Component, Redirect } from "react";

class StudentRequestAcceptance extends Component {
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
        alert('Request Accepted');
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
                                <a>Student</a>
                            </Link>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                            <Link href="../profiles/tutor">
                                <a class ="current">Tutor</a>
                            </Link>
                        </h2>
                    </div>
                    
                    <h1>Student Requests</h1>

                    <h2>Redeemable Points: </h2>

                    <form>
                        <div class = "display_area">
                            <li class = "text_align">Tutoring Request by Student #1 for Chemistry
                                <button onClick={this.handleSubmit} >
                                    Accept Student Request
                                </button>
                            </li>
                            <li class = "text_align">Tuotring Request by Student #2 for Math
                                <button onClick={this.handleSubmit} >
                                    Accept Student Request
                                </button>
                            </li>
                        </div>
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
export default StudentRequestAcceptance;

