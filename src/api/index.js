const express = require('express');

const notesRoutes = require('./notes');


const router = express.Router();
router.use('/notes', notesRoutes);

module.exports = router;
