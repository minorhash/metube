var express = require('express');
var router = express.Router();
var db=require("dblo")
// glob
var par
var typblo

var typBlo=function(req, res, next) {

par=req.params.id
typblo=db.typBlo(par)
next()}


var chk=function(req, res, next) {

console.log(par)
console.log(typblo)
next()}

// get
var gcb= function(req, res, next) {

res.render("index", {
title: par,
par:par,
typblo:typblo

});
}

router.get('/:id', [typBlo,chk,gcb])
// post


module.exports = router;
