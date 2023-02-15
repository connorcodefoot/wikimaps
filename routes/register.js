const express = require('express');
const router  = express.Router();
const users = require('../db/queries/users');


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
//if logged in reroutes to login page
router.get('/', (req, res) => {
  if (req.session.email){
    res.redirect('/login');
    return;
  }
  res.render('register');
});

//registration functionality

router.post('/', (req, res) => {
  let email = req.body.email
  let password = req.body.password

    if (email && password) {
      if (!findEmail(email, users)) {
        const userID = generateRandomString();
        users[userID] = {
          userID,
          email: req.body.email,
          password: req.body.password
        }
        req.session.userID = userID
        res.redirect('/login')
      } else { res.statusCode = 400;
        res.send('<h2>400  Bad Request<br>Email already registered.</h2>')
      }
    } else {
      res.statusCode = 400;
      res.send('<h2>400  Bad Request<br>Please fill out the email and password fields.</h2>')
    }
  });





  //     } else {
  //       res.statusCode = 400;
  //       res.send('<h2>400  Bad Request<br>Email already registered.</h2>')
  //     }
  //   } else {
  //     res.statusCode = 400;
  //     res.send('<h2>400  Bad Request<br>Please fill out the email and password fields.</h2>')
  //   }
  // });

module.exports = router;
