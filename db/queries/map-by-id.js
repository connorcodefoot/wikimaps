const db = require('../connection');

const getMapByID = (id) => {
  return db.query(
    `SELECT maps.*, points.* FROM maps
    JOIN points ON maps.id = map_id
    WHERE maps.id = ${id} ;`)
    .then(data => {
      console.log(data)
      return data.rows[0];
    });
};

module.exports = { getMapByID };
