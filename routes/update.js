var express = require('express');
var router = express.Router();

// 
router.get('/update', function(req, res, next) {
    res.render('update-user');
});

module.exports = router;