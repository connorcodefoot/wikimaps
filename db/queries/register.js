const db = require('../connection')

const addUser = (req) => {
  return db.query(
    `INSERT INTO points (id, email, password) VALUES (${req.id}, ${req.email}, ${req.password})`
  )
};

module.exports= { addUser }
