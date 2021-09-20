const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const searchController = require("../controllers/searchController");

var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/search/:itemToBeSearched",urlencodedParser, searchController.getRecipeArray);

module.exports = router;