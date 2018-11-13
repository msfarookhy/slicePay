var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
///product rout
router.get('/home', (req, res) => {
  res.render('product');
});

router.get('/product', (req, res) => {
  res.render('product');
});

// login rout
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup')

});
module.exports = router;
