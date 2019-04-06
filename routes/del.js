var express = require('express');
var router = express.Router();
var db=require("codblo")
// glob
var par
var typblo

var typBlo=function(req, res, next) {

par=req.params.id
typblo=db.typBlo(par)
next()}


var chk=function(req, res, next) {

console.log(par)
console.log(typblo[0].rowid)
next()}

// get
var gcb= function(req, res, next) {

res.render("del", {
title: par,
par:par,
typblo:typblo

});
}

router.get('/del-:id', [typBlo,chk,gcb])
// post


module.exports = router;
