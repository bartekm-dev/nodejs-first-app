const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`<h1>This will be a shop homepage</h1>`);
});

module.exports = router