var express = require('express');
var router = express.Router();
var hipchat = require('node-hipchat');

var HC = new hipchat('API-KEY');

router.post('/sendChat', function(req, res) {
  var params = {
    room: #, // Found in the JSON response from the call above
    from: req.body.nickName,
    message: req.body.message + ' <img src="'+req.body.img+'">',
    color: req.body.color
  };

  HC.postMessage(params, function(data) {
    console.log(data);
    res.redirect('/')
  });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'WDI ChatBot' });
});

module.exports = router;
