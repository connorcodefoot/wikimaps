// get method for login page '/' -> login
//post method for login page '/' -> req.body.email, req.body.password
// post needs promises to go in the database if email exists, if email exists do passwords match

const express = require('express');
const router = express.Router();
const users = require('../db/queries/users');

router.get('/', (req, res) => {
  res.render('login');
});


router.post('/', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (email && password) {
    users.getUsers(email)
      .then(user => {
        res.json(user);
        // check if password match
        // validate that user exists
        res.cookie('userID', user.id);
        res.status(200).send(); // redirect
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  }
});

//redirect, set cookie
module.exports = router;
