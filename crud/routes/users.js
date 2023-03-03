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

  router.get('/add', function(req, res, next) {
    res.render ("users", {title: 'node js project', action : 'add'})
  });


  router.post("/data_add", function(request, response, next){

    var firstname = request.body.firstname;
  
    var lastname = request.body.lastname;
  
    var age = request.body.age;
  
    var gender = request.body.gender;
  
    var query = `
    INSERT INTO users 
    (firstname, lastname, age, gender) 
    VALUES ("${firstname}", "${lastname}", "${age}", "${gender}")
    `;
  
    database.query(query, function(error, data){
  
      if(error)
      {
        throw error;
      }	
      else
      {
        response.redirect("/users");
      }
  
    });
  
  });


  // router.get('/edit/:id', function(request, response, next){

  //   var id = request.params.id;
  
  //   var query = `SELECT * FROM users WHERE id = "${id}"`;
  
  //   database.query(query, function(error, data){
  
  //     response.render('users', {title: 'Edit MySQL Table Data', action:'edit', sampleData:data[0]});
  
  //   });
  
  // });


module.exports = router;
