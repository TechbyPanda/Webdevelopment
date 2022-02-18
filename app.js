const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoute = require('./routes/index_route');
const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: false}));

const filepath = path.join(__dirname,"public");
app.use(express.static(filepath));

app.use(indexRoute);
app.listen(3000,()=>{
    console.log("server is running");
});
