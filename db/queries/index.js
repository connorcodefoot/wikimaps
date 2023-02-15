const db = require('../connection');

const getMaps = (id) => {
  return db.query(
    `SELECT * FROM maps;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMaps };
