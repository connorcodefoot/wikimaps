const db = require('../connection');

const getFavouritesByID = (id) => {
  return db.query(
    `
    SELECT maps.name
    FROM favourites
    JOIN maps on favourites.map_id = maps.id
    WHERE user_id = 1
    AND favourite = true;
    `)
    .then(data => {
      return data.rows[2];
    });
};

module.exports = { getFavouritesByID };
