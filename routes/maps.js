const express = require('express');
const router = express.Router();
const mapQueries = require('../db/queries/map-by-id');
const pointsQueries = require('../db/queries/points-by-map');
const newMap = require('../db/queries/newMap');
const getLatestMap = require('../db/queries/getMaps');

router.get('/new', (req, res) => {
  return res.render('new-map');
});

router.post('/new', (req, res) => {
  return newMap.createNewMap(req.body)
    .then(() => {
      return getLatestMap.getLastMapCreated()
    })
    .then((map) => {
      res.redirect(`/maps/${map.id}`)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


router.get('/:id', (req, res) => {
  const mapByID = mapQueries.getMapByID(req.params.id)
  const points = pointsQueries.pointsByMap(req.params.id)

  return Promise.all([mapByID, points])
    .then(([mapByID, points]) => {
      return res.render('map-by-id', { mapByID, points })
    });
});


module.exports = router;
