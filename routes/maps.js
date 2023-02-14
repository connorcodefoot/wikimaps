const express = require('express');
const router  = express.Router();
const mapQueries = require('../db/queries/map-by-id');
const pointsQueries = require('../db/queries/points-by-map');

router.get('/:id', (req, res) => {


  const mapByID = mapQueries.getMapByID(req.params.id)
  const points = pointsQueries.pointsByMap(req.params.id)

  return Promise.all([mapByID, points])
  .then(([mapByID, points]) => {
    return res.render('map-by-id', {mapByID, points})
  });
});

module.exports = router;
