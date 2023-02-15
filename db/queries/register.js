const db = require('../connection')

// const addUser = (email, password) => {
//   return db.query(
//     `INSERT INTO users (email, password) VALUES (${email}, ${password})`
//   )
// };
const addUser = function(email, password) {
  const queryString = `
  INSERT INTO users (email, password)
  VALUES ($1, $2);`
  const values = [email, password]
  return db.query(queryString, values)
}

module.exports= { addUser };
