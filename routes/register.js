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
  .then((response) => {
    console.log(response.rows[0])
    req.session.id = response.rows[0].id
    res.redirect(`/`)
  })
  .catch(err => {
    res.status(400).json({ error: err.message });
      })
  }
})


module.exports = router;
