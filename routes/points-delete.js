const express = require('express');
const router  = express.Router();
const deletePoint  = require('../db/queries/delete-point');

router.post('/:id', (req, res) => {
  return deletePoint.deletePointByID (req.params.id)
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
