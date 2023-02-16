const express = require('express');
const router  = express.Router();
const getFavourites = require('../db/queries/get-favourite')

router.get('', (req, res) => {
  getFavourites.getFavouriteByID()
    .then(mapID => {
      console.log(mapsList)
      return res.render('profile', { MapID })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;

