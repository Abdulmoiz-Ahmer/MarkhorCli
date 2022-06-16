const express = require("express");
const app = express();
const port = 3000;
require("./routes");
const inSerializer = require("./in-serializer");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
