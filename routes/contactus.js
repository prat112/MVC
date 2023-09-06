const express =require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

router.use('/contactus',productsController.getContactPage);
module.exports = router;