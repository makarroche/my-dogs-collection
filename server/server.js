
// Import services
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const path = require("path");

const { getDogs } = require("./api/services/getDogs");
const { postDogs } = require("./api/services/postDogs");
const { deleteDogs } = require("./api/services/deleteDogs");
const { updateDogs } = require("./api/services/updateDogs");
const { postImageToServer } = require("./api/services/postImageToServer");

// Setup express and body parser
const express = require("express");
var cors = require("cors");
const app = express();
const port = 5005;

app.use(express.static(__dirname + '/uploads'));

let bodyParser = require("body-parser");

app.use(
  cors(),
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Server running!");
});


app.get("/dog", getDogs);
app.post("/dog", postDogs);
app.put("/dog", updateDogs);
app.delete("/dog", deleteDogs)
app.post("/image",upload.array("file"), postImageToServer);

app.listen(port, () => {
  console.log("Listen on the port 5005...");
});
