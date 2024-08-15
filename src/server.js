const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = 3100;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
