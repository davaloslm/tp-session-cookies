const express = require('express');
const { index, processForm } = require("../controllers/indexController");
const validateIndexForm = require('../middlewares/IndexFormValidator');
const router = express.Router();


/* GET home page. */
router.get('/',  index);
router.post('/', validateIndexForm, processForm);





module.exports = router;
