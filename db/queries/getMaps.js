const db = require('../connection');

const getLastMapCreated = () => {
  return db.query(`SELECT * FROM maps ORDER BY id DESC LIMIT 1`)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getLastMapCreated };
