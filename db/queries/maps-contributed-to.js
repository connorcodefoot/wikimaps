const db = require('../connection');

const getMapsContributedTo = function(id) {
  return db.query(
    `
    SELECT DISTINCT maps.name, *
    FROM points
    JOIN maps on points.map_id = maps.id
    WHERE user_id = $1;
    `, [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMapsContributedTo };
