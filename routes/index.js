var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('author').select().then(function(data) {
    res.render('index', {author: data})
  })
});
/*Create a POST page.*/
router.get('/create', function(req, res, next) {
  res.render('create');
});
/*Go To POSTs page.*/
router.get('/post', function(req, res, next) {
  res.render('post');
});
/* GET post page. */
router.get('/post', function(req, res, next) {
  knex('post').select().then(function(data) {
    res.render('post', {post: data})
  })
});
/*Posting DATA to the Database*/
router.post('/create', function(req, res, next) {
  knex('post').insert(req.body).then(function(){
    res.redirect('/post');
  }).catch(function(error) {
    console.log(error);
  })
});
module.exports = router;
