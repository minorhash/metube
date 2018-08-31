var express = require('express');
var router = express.Router();

var chk=function(req, res, next) {

next()}

// get
var gcb= function(req, res, next) {
var par=req.params.id
console.log(par)
var bod=req.body.par
console.log(bod)

res.render("index", {
title: par,
par:par,
bod:bod
});
}


router.get('/:id', [chk,gcb])
// post


module.exports = router;
