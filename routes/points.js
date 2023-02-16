const express = require('express');
const router  = express.Router();
const newPoint  = require('../db/queries/new-point');

router.get('/new', (req, res) => {
    res.render('new-point')
});

router.post('/new', (req, res) => {
  newPoint.addPointToDB(req.body)
  .then(() => {
    res.redirect(`/maps/${req.body.mapID}`)
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

module.exports = router;
