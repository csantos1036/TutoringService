const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
let userId = 1;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const db = mysql.createConnection({
  user: 'pD5hLeicAv',
  host: 'www.remotemysql.com',
  password: 'sOVR1FnShz',
  database: 'pD5hLeicAv'
});

app.get('/getuserid', (request, response) => {
  response.send([userId])
})

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
    userId = result[0].userId;
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
  const userId = request.body.userId;
  const points = parseInt(request.body.points);
  const subject = request.body.subject
  let name = ''
  let userPoints = 0;
  let file;
  let uploadPath;

  if (!request.files || Object.keys(request.files).length === 0) {
    return response.send('No files were uploaded');
  }

  file = request.files.file;
  uploadPath = __dirname + '/upload/' + file.name;
  file.mv(uploadPath);

  db.query('SELECT name, points FROM user WHERE userId=?',
    [userId],
    (error, result) => {
      if (error) {
        console.log(error)
      } else {
        name = result[0].name
        userPoints = parseInt(result[0].points);
        newUserPoints = points + userPoints

        db.query('UPDATE user SET points=? WHERE userId=?',
          [newUserPoints, userId],
          (error, result) => {
            if (error) {
              console.log(error);
            }
        });

        db.query('INSERT INTO file (fileName, name, subject) VALUES (?, ?, ?)',
          [file.name, name, subject],
          (error, result) => {
            if (error) {
              console.log(error);
            }
          }
        );
      }
    }
  );
});

app.get('/materiallist', (request, response) => {
  db.query('SELECT * FROM file',
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        response.send(result)
      }
    }
  );
});

app.post('/filepath', (request, response) => {
  const filePath = __dirname + '/upload/' +  request.body.file;
  const stat = fs.statSync(filePath);
  response.writeHead(200, {
    'Content-Length': stat.size,
  })
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
});

app.post('/removepoints', (request, response) => {
  const userId = request.body.userId;
  const pointsDeducted = parseInt(request.body.pointsDeducted);

  db.query('SELECT points FROM user WHERE userId=?',
    [userId],
    (error, result) => {
      if (error) {
        console.log(error)
      } else {
        let userPoints = parseInt(result[0].points);
        let newUserPoints = userPoints - pointsDeducted;

        db.query('UPDATE user SET points=? WHERE userId=?',
          [newUserPoints, userId],
          (error, result) => {
            if (error) {
              console.log(error);
            } else {
              response.send(['valid', newUserPoints]);
            }
        });
      }
    });
});

app.post('/request', (request, response) => {
  const userId = request.body.userId;
  const method = request.body.method;

  db.query('INSERT INTO request(userId, method) VALUES (?, ?)',
    [userId, method],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    });
});

app.listen(3001, ()=>{});