var express = require('express');
var router = express.Router();

/* LOGIN TO ACCOUNT */
router.post('/login', function(req, res, next) {
  let user = {name:'John Doe', username: req.body.username};
  res.json({success:true , message: "User LogedIn Successfully", user: user});
});

module.exports = router;