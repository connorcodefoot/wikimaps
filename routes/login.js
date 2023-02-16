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
        res.cookie('userID', user.id);
        res.redirect('/');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  }
});

module.exports = router;
