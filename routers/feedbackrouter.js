const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const feedbackController = require("../controllers/feedbackcontroller");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post(`/user/feedback`,urlencodedParser, feedbackController.feedback);

module.exports = router;