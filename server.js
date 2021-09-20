const express = require("express");
const bodyParser = require("body-parser");
const searchRouter = require("./routers/searchRouter");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(searchRouter);
app.use(express.json());

app.get("/",function(req,res){
})

app.listen(4000, function() {
    console.log("Server started on port 4000");
});