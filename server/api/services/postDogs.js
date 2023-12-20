const pool = require("../config").pool;

const postDogs = (request, response) => {
  const { id, breed, image, description} = request.body;
  pool.query(
    `INSERT INTO dogs (id, breed, description, image) VALUES ('${id}', '${breed}','${description}','${image}');`,
    (error, results) => {
      if (error) {
        console.log(error);
      }
    }
  );
  response.status(200).send("Doggie added to database");
};

module.exports = {
    postDogs,
};
