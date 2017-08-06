const express = require('express');
const router = express.Router();
const db = require('../database/db.js');


router.get('/', (req, res) =>{
	res.send('Hello from API');
});


module.exports = router;