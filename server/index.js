const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  user: 'pD5hLeicAv',
  host: 'www.remotemysql.com',
  password: 'sOVR1FnShz',
  database: 'pD5hLeicAv'
});

app.post('/login', (request, response) => {
  const email = request.body.loginEmail
  const password = request.body.loginPassword

  function sendLoginResponse(result, password) {
    if (result.length !== 0 && result[0].password === password) {
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
        sendLoginResponse(result, password);
      }
    })
});

app.listen(3001, ()=>{});