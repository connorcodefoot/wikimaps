const db = require('../connection');

const addUser = function(user_id, map_id) {
  const queryString = `
  INSERT INTO favourites (user_id, map_id)
  VALUES ($1, $2);`
  const values = [user_id, map_id]
  return db.query(queryString, values)
}

module.exports = { favouriteMap };
