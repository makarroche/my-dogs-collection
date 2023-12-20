const promise = require("fs");

const postImageToServer = async (request, response) => {
  try {
    console.log(request.files);
    response.send(request.files[0].filename);
  } catch (error) {
      console.log(error);
  }
};

module.exports = {
  postImageToServer
};
