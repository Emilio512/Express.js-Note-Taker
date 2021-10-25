const express = require('express');
const html = require("./routes/htmlRoutes")
const api = require("./routes/apiRoutes")
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use("/",html)
app.use("/api",api)
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });