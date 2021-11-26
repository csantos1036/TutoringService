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

  function sendLoginResponse(isValidPassword) {
    response.send(isValidPassword);
  }

  function verifyPassword(result, password) {
    res = 'invalid'
    if (result.length !== 0 && result[0].password === password) {
      res = 'valid'
    }
    return res;
  }

  db.query('SELECT password FROM user WHERE email=?',
    [email],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        isValidPassword = verifyPassword(result, password)
        sendLoginResponse(isValidPassword);
      }
    })
});

app.listen(3001, ()=>{});