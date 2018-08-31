var express = require('express');
var router = express.Router();
var cal=require("calendar-js")

var utc,jul,aug,augc,sep

var getDat=function(req, res, next) {
utc = new Date().toJSON().slice(0,10).replace(/-/g,"/")
ju=cal().of(2018, 6)
    jul=ju.calendar
au=cal().of(2018, 7)
    aug=au.calendar
se=cal().of(2018, 8)
    sep=se.calendar
next()}


var chk=function(req, res, next) {
    console.log(aug)
next()}

// post

var pcb= function(req, res, next) {

res.render("sch", {
title: "schedule",
    jul:jul,
    au:au,
    aug:aug,
sep:sep
});
}
router.post('/sch-:id', [getDat,chk,pcb])

module.exports = router;
