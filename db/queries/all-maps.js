const db = require('../connection');

const getAllMaps = () => {
  return db.query(
    `SELECT * FROM maps`)
    .then(data => {
      console.log(data.rows)
      return data.rows;
    });
};

module.exports = { getAllMaps };
