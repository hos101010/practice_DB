var express = require('express');
var router = express.Router();
var {User} = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findOne({where:{id:"apple"}})
      .then((user) => {
        res.render('index', { title: 'Express',
                              name: user.name });
      });
});

module.exports = router;
