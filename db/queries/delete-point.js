const db = require('../connection');

const deletePointByID = (id) => {
  return db.query(
  `DELETE FROM points WHERE id = ${id}`)
  };

module.exports = { deletePointByID };
