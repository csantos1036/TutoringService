const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const objectAssign = require('object-assign');

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const db = mysql.createConnection({
  user: 'pD5hLeicAv',
  host: 'www.remotemysql.com',
  password: 'sOVR1FnShz',
  database: 'pD5hLeicAv'
});

app.post('/login', (request, response) => {
  const email = request.body.loginEmail;
  const password = request.body.loginPassword;

  function sendLoginResponse(isValidPassword) {
    response.send(isValidPassword);
  }

  function verifyPassword(result, password) {
    res = 'invalid';
    if (result.length !== 0 && result[0].password === password) {
      res = ['valid', result[0].userId];
    }
    return res;
  }

  db.query('SELECT * FROM user WHERE email=?',
    [email],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        isValidPassword = verifyPassword(result, password)
        sendLoginResponse(isValidPassword);
      }
    });
});

app.post('/register', (request, response) => {
  const email = request.body.registerEmail;
  const password = request.body.registerPassword;
  const name = request.body.registerName;

  db.query('INSERT INTO user(email, password, name) VALUES (?, ?, ?)',
    [email, password, name],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    });
});

app.post('/userprofile', (request, response) => {
  const userId = request.body.userId;

  function sendUserProfile(validResponse) {
    response.send(validResponse);
  }

  function verifyResponse(result) {
    res = ['invalid'];
    if (result.length !== 0) {
      res = ['valid', result[0]];
    }
    return res;
  }

  db.query('SELECT * FROM user WHERE userId=?',
    [userId],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        validResponse = verifyResponse(result);
        sendUserProfile(validResponse);
      }
    });
});

app.post('/subjectstrength', (request, response) => {
  const userId = request.body.userId;

  function sendSubjectStrengths(validResponse) {
    response.send(validResponse);
  }

  function verifyResponse(result) {
    res = ['invalid'];
    if (result.length !== 0) {
      listOfSubjects = [];
      result.forEach((x, i) => listOfSubjects.push(result[i].subject));
      res = ['valid', listOfSubjects];
    }
    return res;
  }

  db.query('SELECT subject FROM subject_strength WHERE userId=?',
    [userId],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        validResponse = verifyResponse(result);
        sendSubjectStrengths(validResponse);
      }
    });
});

app.post('/subjectneed', (request, response) => {
  const userId = request.body.userId;

  function sendSubjectNeeds(validResponse) {
    response.send(validResponse);
  }

  function verifyResponse(result) {
    res = ['invalid'];
    if (result.length !== 0) {
      listOfSubjects = [];
      result.forEach((x, i) => listOfSubjects.push(result[i].subject));
      res = ['valid', listOfSubjects];
    }
    return res;
  }

  db.query('SELECT subject FROM subject_need WHERE userId=?',
    [userId],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        validResponse = verifyResponse(result);
        sendSubjectNeeds(validResponse);
      }
    });
});

app.post('/upload', (request, response) => {
  let file;
  let uploadPath;

  if (!request.files || Object.keys(request.files).length === 0) {
    return response.send('No files were uploaded');
  }

  file = request.files.file;
  uploadPath = __dirname + '/upload/' + file.name
  file.mv(uploadPath)

});

app.listen(3001, ()=>{});