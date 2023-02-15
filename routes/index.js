
const express = require('express');
const router  = express.Router();
const indexQueries = require('../db/queries/index');

router.get('', (req, res) => {
  indexQueries.getMaps()
    .then(mapsList => {
      console.log(mapsList)
      return res.render('index', { mapsList })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
