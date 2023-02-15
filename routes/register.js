const express = require('express');
const router  = express.Router();
const users = require('../db/queries/users');
const addUser = require('../db/queries/register')


const findEmail = (email, database) => {
  for (const users in database) {
    if (database[users].email === email) {
      return database[users];
    }
  }
  return undefined;
};

function generateRandomString() {
  return Math.random().toString(36).substring(2, 8);
}
//if logged in reroutes to home page
router.get('/', (req, res) => {
  res.render('register');
});

//registration functionality

router.post('/register', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  if (email && password) {
    if (!findEmail(email, users)) {
  register.addUser(req.body)
  .then(() => {
    res.redirect(`/login`)
  })
  .catch(err => {
    res.status(400).json({ error: err.message });
      })
    }
  }
})


// router.post('/', (req, res) => {
//   let email = req.body.email
//   let password = req.body.password
//     if (email && password) {
//       if (!findEmail(email, users)) {
//         const userID = generateRandomString();
//         addUser[userID] = {
//           userID,
//           email: req.body.email,
//           password: req.body.password
//         }
//         req.session.userID = userID
//         res.redirect('/')
//       } else { res.statusCode = 400;
//         res.send('<h2>400  Bad Request<br>Email already registered.</h2>')
//       }
//     } else {
//       res.statusCode = 400;
//       res.send('<h2>400  Bad Request<br>Please fill out the email and password fields.</h2>')
//     }
//   });

module.exports = router;
