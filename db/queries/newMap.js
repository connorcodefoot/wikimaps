const db = require('../connection');

const createNewMap = (req) => {
  console.log(req);
  return db.query(`INSERT INTO maps (name, lat, lng, zoom) VALUES ($1, $2, $3, $4)`, [req.name, req.latitude, req.longitude, req.zoom])
};

module.exports = { createNewMap };
