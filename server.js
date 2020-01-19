const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Express Server for CRUD REST API using MySQL." });
});

require("./app/routes/alumn.routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
