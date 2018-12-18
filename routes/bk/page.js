var express = require('express');
var router = express.Router();
var db=require("dblo")
var tit,typ,par,bod

var insBlo=function(req, res, next) {

par=req.params.id
bod=req.body

tit=req.body.tit
typ=req.body.typ
ter=req.body.ter
lin=req.body.lin
body=req.body.bod
    var d=new Date()
    dat=d.getDate()

if(req.body){
db.insBlo(typ,ter,tit,lin,body)
}else{console.log("no req.body")}
next()}

var chk=function(req, res, next) {
console.log(par)
console.log(bod)

next()}

// get
var pcb= function(req, res, next) {

res.render("page", {
title: par,
bod:bod
});
}

router.post('/page-:id', [insBlo,chk,pcb])
// post


module.exports = router;
