const db = require('../connection');

const pointsByMap = (id) => {
  return db.query(
    `SELECT * FROM points
    WHERE map_id = ${id};`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { pointsByMap };
