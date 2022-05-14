const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const feedbackController = require("../controllers/feedbackcontroller");
const collaborateController = require("../controllers/collaborateController");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post(`/user/feedback`,urlencodedParser, feedbackController.feedback);
router.post(`/user/Collaborate`,urlencodedParser, collaborateController.collaborate);

module.exports = router;