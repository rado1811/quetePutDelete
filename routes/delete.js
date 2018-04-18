var express = require('express');
var router = express.Router();

// 
router.get('/delete/', function(req, res, next) {
    res.render('delete-user');
});


module.exports = router;
