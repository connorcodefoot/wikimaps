const express = require ('express');
const router = express.Router();
const users = require('../db/queries/users');

const findEmail = (email, database) => {
  for (const user in database) {
    if (database[user].email === email) {
      return database[user];
    }
  }
  return undefined;
};

function generateRandomString() {
  return Math.random().toString(36).substring(2, 8);
}

app.get('/register', (req, res) => {
  if (req.session.userID){
    res.redirect('/login');
    return;
  }
  const templateVars = {user: users[req.session.userID]};
  res.render('registration', templateVars);
});

  app.post('/register', (req, res) => {
    if (req.body.email && req.body.password) {
      if (!findEmail(req.body.email, users)) {
        const userID = generateRandomString();
        users[userID] = {
          userID,
          email: req.body.email,
          password: req.body.password
        }
        req.session.userID  = userID;
        res.redirect('/login');
      } else {
        res.statusCode = 400;
        res.send('<h2>400  Bad Request<br>Email already registered.</h2>')
      }
    } else {
      res.statusCode = 400;
      res.send('<h2>400  Bad Request<br>Please fill out the email and password fields.</h2>')
    }
  });
