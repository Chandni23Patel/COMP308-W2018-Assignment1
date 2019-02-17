var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', (req, res, next) => {
  res.render('users/add', {
      title: "Add a New Contact"
  });
});

module.exports = router;
