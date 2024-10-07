const express = require('express');
const { getAllNodes } = require('../controllers/nodeController');  
const router = express.Router();

/* fetch the graphData Api */
router.get('/data', getAllNodes);

module.exports = router;
