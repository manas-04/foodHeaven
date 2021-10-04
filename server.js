const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const db = require("./utils/db");
const authrouter = require("./routers/authrouter");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(authrouter);

app.get('/', (req,res) => {
    res.send(`<h1>API Running on the port 4000</h1>`);
});

db.then(connection => {
    if(connection){
        console.log("Server connected.");
        app.listen(4000,function(){
            console.log("Server listening at port 4000.");
        });
    }
}).catch(err => {
    console.log(err);
});


