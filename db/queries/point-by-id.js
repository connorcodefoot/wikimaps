const db = require('../connection');

const getPointByID = (id) => {
  return db.query(
    `SELECT * FROM points
    WHERE id = ${id};`)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getPointByID };
