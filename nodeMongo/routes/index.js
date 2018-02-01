var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'about' });
});

/* GET random.text */
// app.get('/random.text', function (req, res) {
// 	res.send('random.text');
// });

module.exports = router;
