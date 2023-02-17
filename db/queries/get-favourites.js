const db = require('../connection');

const getFavouritesByID = function(id) {
  return db.query(
    `
    SELECT maps.*
    FROM favourites
    JOIN maps on favourites.map_id = maps.id
    WHERE user_id = $1
    AND favourite = true;
    `, [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavouritesByID };
