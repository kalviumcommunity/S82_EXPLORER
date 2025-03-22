const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT =  5000;


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "server is running." });
});


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
