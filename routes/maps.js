const express = require('express');
const router  = express.Router();
const mapQueries = require('../db/queries/map-by-id');

router.get('/:id', (req, res) => {
  mapQueries.getMapByID(req.params.id)
    .then(mapByID => {
      return res.render('map-by-id', { mapByID })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
