var express = require('express');
var router = express.Router();

var chk=function(req, res, next) {

next()}

// get
var pcb= function(req, res, next) {
var par=req.params.id
console.log(par)
var bod=req.body
console.log(bod)

res.render("page", {
title: par,
bod:bod
});
}


router.post('/page-:id', [chk,pcb])
// post


module.exports = router;
