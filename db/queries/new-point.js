const db = require('../connection');

const addPointToDB = (req) => {
  return db.query(
    `INSERT INTO points (map_id, title, description, image, latitude, longitude) VALUES ('${req.mapID}', '${req.title}', '${req.description}', '${req.image}', '${req.latitude}', '${req.longitude}')`)
  };

module.exports = { addPointToDB };
