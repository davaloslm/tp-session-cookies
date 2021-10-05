const express = require('express');
const { index } = require("../controllers/indexController");
const validateIndexForm = require('../middlewares/IndexFormValidator');
const router = express.Router();


/* GET home page. */
router.get('/', validateIndexForm, index);

module.exports = router;
