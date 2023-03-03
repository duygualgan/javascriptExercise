var express = require('express');
var router = express.Router();
var database = require('../database');

router.get('/', function(req, res, next) {
    var query = "SELECT * FROM users order by id desc";
    database.query (query, function(err ,data){
        if(err){
            throw err
        }else{
            res.render('users', {title: 'node js project', action : 'list', sampleData: data});
        }

    })
  });


module.exports = router;