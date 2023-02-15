const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('registration-confirmation');
});

router.post('/', (req, res) => {
    res.redirect(`/login`)
  })

  module.exports = router
