const db = require('../connection');

const updatePointByID = (req, id) => {
  return db.query(
    `UPDATE points SET title = '${req.title}', description = '${req.description}', latitude = '${req.latitude}', longitude = '${req.longitude}', image = '${req.image}' WHERE id = '${id}';`)
  };

module.exports = { updatePointByID };
