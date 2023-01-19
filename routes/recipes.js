var recipes = require("../recipes.json");
var router = require("express").Router();

// router.get("/", function (req, res, next) {
//   const params = req.params;
//   recipes.length=3
//   res.send(recipes)
// })
router.get("/", function (req, res, next) {
  const { page, limit } = req.query;
  if ((!page, !limit)) {
    recipes.length = 3;
    res.send(recipes);
  } else {
    for (let i = 0; i < (page - 1) * 3; i++) {
      recipes.shift();
    }
    recipes.splice(limit);
    res.send(recipes);
  }
});

module.exports = router;
