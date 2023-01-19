var recipes = require('../recipes.json');
var router = require('express').Router();

router.get("/?page&limit", function (req, res, next) {
  const params = req.params;
  recipes.length=3
  res.send(recipes)
})

module.exports = router;

