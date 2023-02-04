require("dotenv").config()
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo")
const app = express();

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 3000;

/**
 * Here we call the routes! 😎
*/

//TODO: localhost/api/_________
app.use('/api', require("./routes"))

app.listen(port, () => {
  console.log(`The service is runnig on http://localhost:${port}`);
});

dbConnect()