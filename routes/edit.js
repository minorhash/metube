var express = require('express');
var router = express.Router();
var db=require("codblo")
// glob
var par,id,title
var idblo

var idGet=function(req, res, next) {

par=req.params.id
id=req.body.id
idblo=db.idBlo(par)
next()}

var chk=(req, res, next)=> {

console.log(par)
//console.log(id)
console.log(idblo)
next()}

// get
var gcb= (req, res)=>{

res.render("edit", {
title: idblo.title,
par:par,
idblo:idblo

});
}


router.post('/edit-:id', [idGet,chk,gcb])
// post


module.exports = router;
