import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import React, { Component } from "react";

class UserForm extends Component {
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
      alert('User Profile Updated');
      event.preventDefault();
    }

render() {
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
            <form onSubmit={this.handleSubmit}>
                <label> Subject Stengths:
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
                <div></div>
                <label> Subject Needs: 
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
                <div></div>
                <label> Preferred Method of Tutoring: 
                    <select name = "Subject Stengths">
                                <option value = "-1" selected>[select]</option>
                                <option value="0">Online</option>
                                <option value="1">Face to Face</option>
                    </select>
                </label>
                <div></div>
                <input type="submit" value="Submit" />
            </form>
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
}

export default UserForm;
