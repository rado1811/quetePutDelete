var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:user(\[a-z]+)', function(req, res, next) {
  res.render('update-user', {user : req.params.user});
});

router.put('/:user(\[a-z]+)', function (req, res, next) {
  res.send('The new name is ' + req.params.user);
});

router.get('/:id(\\d+)', function(req, res, next) {
  res.render('delete-user', {id: req.params.id });
});

router.delete('/:id(\\d+)', function (req, res, next) {
  res.send('No more user with id ' + req.params.id);
});

module.exports = router;