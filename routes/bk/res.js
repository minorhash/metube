var express = require('express');
var router = express.Router();
var db=require("dblo")
// glob
var par,id,title
var typblo

var typBlo=function(req, res, next) {

par=req.params.id
id=req.body.rowid
typblo=db.idBlo(par)
next()}


var chk=function(req, res, next) {

console.log(par)
console.log(id)
console.log(typblo)
next()}

// get
var gcb= function(req, res, next) {

res.render("res", {
title: typblo.title,
par:par,
typblo:typblo

});
}

router.post('/res-:id', [typBlo,chk,gcb])
// post


module.exports = router;
