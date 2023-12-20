const pool = require("../config.js").pool;

const getDogs = (request, response) => {
  pool.query(`SELECT * FROM dogs;`, (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).send(results);
  });
};

module.exports = {
  getDogs,
};
