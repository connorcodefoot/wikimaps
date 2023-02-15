const express = require('express');
const router  = express.Router();
const editPoint  = require('../db/queries/point-by-id');
const updatePoint = require('../db/queries/update-point');

router.get('/:id', (req, res) => {
  return editPoint.getPointByID(req.params.id)
  .then((point) => {
    res.render('edit-point', { point })
  })
});

router.post('/update/:id', (req, res) => {
  return updatePoint.updatePointByID(req.body, req.params.id)
  .then(() => {
    backURL= req.header('Referer')
    res.redirect(backURL)
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});


module.exports = router;
