var express = require('express');
var router = express.Router();

var chk=function(req, res, next) {

next()}

// post

var pcb= function(req, res, next) {
var par=req.params.id
console.log(par)
var bod=req.body
console.log(bod)

res.render("add", {
title: par,
par:par,
bod:bod
});
}
router.post('/add-:id', [chk,pcb])

module.exports = router;
