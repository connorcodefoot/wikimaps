const db = require('../connection');

const getMapByID = (id) => {
  return db.query(`SELECT * FROM maps WHERE id = ${id} ;`)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getMapByID };
