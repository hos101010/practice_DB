var express = require('express');
var router = express.Router();
var models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  // User.findOne({where:{id:"apple"}})
  //     .then((user) => {
        res.render('index', { title: 'Express'});//,
                             // name: user.name });
      // });
});

router.post('/', function(req, res, next){
  let body = req.body;

  models.cli_test.create({
    test1: body.inputTitle,
    test2: body.inputWriter
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
})

module.exports = router;
