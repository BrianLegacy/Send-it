//const { request } = require('express')
//const res = require('express/lib/response')
//const mssql = require('mssql')
//const { MSSQLError } = require('mssql/lib/base')
const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.json());
const routes = require("./Routes/routes");

app.use(routes);


app.listen(4000, () => {
  console.log("running...");
})

