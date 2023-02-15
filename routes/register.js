const express = require('express');
const router  = express.Router();
const users = require('../db/queries/users');
const register = require('../db/queries/register')


router.get('/', (req, res) => {
  res.render('register');
});

//registration functionality

router.post('/', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  if (email && password) {
  register.addUser(email, password)
  .then(() => {
    res.redirect(`/registration-confirmation`)
  })
  .catch(err => {
    res.status(400).json({ error: err.message });
      })
  }
})


module.exports = router;
