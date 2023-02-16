const db = require('../connection')

const addUser = function(email, password) {
  const queryString = `
  INSERT INTO users (email, password)
  VALUES ($1, $2)
  RETURNING *;
  `
  const values = [email, password]
  return db.query(queryString, values)
}

module.exports= { addUser };
