var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/users/:id(\\w+)', function(req, res, next) {
  res.render('views/update');
});


router.put('/users/:id(\\w+)', function (req, res, next) {
  res.send('The new name is ' + req.body.id);
});

router.get('/users/:id(\\d+)', function(req, res, next) {
  res.render('views/delete');
});

router.delete('/users/:id(\\d+)', function (req, res, next) {
  res.send('No more user with id ' + req.body.id);
});

module.exports = router;