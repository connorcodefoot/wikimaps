const express = require('express');
const router  = express.Router();
const favouritesQuery = require('../db/queries/get-favourites')
const contributionQuery = require('../db/queries/maps-contributed-to')

router.get('', (req, res) => {
 const mapNames = favouritesQuery.getFavouritesByID(req.cookies.userID)
 const mapsContributed = contributionQuery.getMapsContributedTo(req.cookies.userID)
    return Promise.all([mapNames, mapsContributed])
    .then(([mapNames, mapsContributed]) => {
      return res.render('profile', { mapNames, mapsContributed })
    });
});

module.exports = router;

