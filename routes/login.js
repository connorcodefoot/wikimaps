// get method for login page '/' -> login
//post method for login page '/' -> req.body.email, req.body.password
// post needs promises to go in the database if email exists, if email exists do passwords match

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});


router.post('/', (req, res) => {
  userQueries.getUsers(req.body.email)
  .then(users => {
    res.json({ users });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

//redirect, set cookie
module.exports = router;
