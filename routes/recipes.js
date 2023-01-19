var recipes = require('../recipes.json');
var router = require('express').Router();

router.get("/recipes",(req,res)=>{
  console.log("req,res")
})

module.exports = router;

