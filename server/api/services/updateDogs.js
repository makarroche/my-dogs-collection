const pool = require("../config").pool;

const updateDogs = (request, response) => {
  const { id, breed, image, description } = request.body;
  pool.query(
    `UPDATE dogs SET breed = '${breed}', image = '${image}', description = '${description}' WHERE id='${id}';`,
    (error, results) => {
      if (error) {
        console.log(error);
      }
    }
  );
  response.status(200).send("Doggie updated in d");
};

module.exports = {
    updateDogs,
};
