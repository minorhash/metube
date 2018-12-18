var express = require('express');
var router = express.Router();
var par,bod

var chk=function(req, res, next) {

next()}

// post

var pcb= function(req, res, next) {
par=req.params.id
console.log(par)
bod=req.body
console.log(bod)

res.render("add", {
title: par,
par:par,
bod:bod
});
}
router.post('/add-:id', [chk,pcb])

module.exports = router;
