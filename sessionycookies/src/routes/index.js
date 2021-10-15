const express = require('express');
const { index, processForm, user} = require("../controllers/indexController");
const validateIndexForm = require('../middlewares/IndexFormValidator');
const router = express.Router();


/* GET home page. */
router.get('/',  index);
router.post('/', validateIndexForm, processForm);

router.get('/user',  user);







module.exports = router;
