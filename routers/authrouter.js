const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const authController = require("../controllers/authcontroller");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post(`/user/signUp`,urlencodedParser, authController.signUp);
router.post(`/user/login`,urlencodedParser, authController.logIn);
router.post('/user/validate',urlencodedParser,authController.validate);

module.exports = router;