const express = require('express');
const router  = express.Router();
const newPoint  = require('../db/queries/new-point');
const allMaps = require('../db/queries/all-maps')


router.get('/new', (req, res) => {
  return allMaps.getAllMaps()
    .then((allMaps) => {
      console.log(allMaps)
      res.render('new-point', { allMaps })
    })
});

router.post('/new', (req, res) => {
  return newPoint.addPointToDB(req.body)
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
