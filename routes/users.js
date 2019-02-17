/*
    File name: users.ejs (defining routes)
    Student name: Chandni Patel
    Student ID: 300990555
    Date: Febuary 16, 2019
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', (req, res, next) => {
  res.render('users/add', {
      title: "Add a New Contact"
  });
});

module.exports = router;
