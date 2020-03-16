const next = require("next");
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

nextApp.prepare().then(() => {
  const express = require("express");
  const bodyParser = require("body-parser");
  const PORT = process.env.PORT || 3000;
  const mongoose = require("mongoose");
  const connectDB = require("./db/mongo");
  // express code here
  const app = express();

  //connect database
  connectDB();

  //Init middleware
  app.use(express.json({ extended: false }));

  //routes
  app.use("/api/auth", require("./routes/api/auth"));

  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
