const pool = require("../config").pool;

const deleteDogs = (request, response) => {
  const { id } = request.body;
  pool.query(
    `DELETE FROM dogs WHERE id='${id}';`,
    (error, results) => {
      if (error) {
        console.log(error);
      }
    }
  );
  response.status(200).send("Doggie updated in database");
};

module.exports = {
    deleteDogs,
};
