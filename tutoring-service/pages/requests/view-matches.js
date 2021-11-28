import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Form, FormControl, Button, FormLabel, FormGroup } from 'react-bootstrap'
import React, { Component } from "react";

class MatchForm extends Component {
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
      alert('Match confirmed');
      event.preventDefault();
    }

    render() {
        return (
            <>
                <Layout>
                    <Head>
                        <title>View Matches</title>
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
                    
                    <h1>View Matches</h1>

                    <div class = "dropdownLabel">
                    <form onSubmit={this.handleSubmit}>
                        <label> Confirmed Matches:
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
                        </label>
                    </form>
                    </div>
                    
                    <button class="loginButton" variant="primary">
                        Submit 
                    </button>

                    <h1>Tutor Info:</h1>

                    <p>Name: </p>
                    <p>Subject: </p>
                    <p>Email: </p>


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

export default MatchForm;