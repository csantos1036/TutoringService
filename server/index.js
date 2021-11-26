const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'tutoringservicedb'
});

app.post('/login', (request, response) => {
  const email = request.body.loginEmail
  const password = request.body.loginPassword

  function sendLoginResponse(result) {
    if (result.length !== 0) {
      response.send('valid');
    } else {
      response.send('invalid');
    }
  }

  db.query('SELECT password FROM user WHERE email=?',
    [email],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        sendLoginResponse(result);
      }
    })
});

app.listen(3001, ()=>{});