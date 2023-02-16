const db = require('../connection');

const getFavouriteByID = (id) => {
  return db.query(
    `SELECT * FROM favourites
    WHERE user_id = ${id}
    AND favourite = true;`)
    .then(data => {
      return data.rows[2];
    });
};

module.exports = { getFavouritesByID };
