const express = require('express');
const router = express.Router();
const db=require("dblo")
// glob
let par="",sess="",sid=""
let getusr="",typblo=""
let usr="",pss=""

const getUsr=function(req, res, next) {
if(req.body){
usr=req.body.usr
pss=req.body.pss
}else{
    sess=req.session
usr=sess.usr
pss=sess.pss
    console.log("no req")}

try{getusr=db.getUsr(req.body.usr,req.body.pss)
if(getusr==undefined)throw "no getusr"
if(getusr=="")throw "empty"
if(getusr==null)throw "null"
}
catch(err){console.log(err)}
next()}

const getSid=function(req, res, next) {
sess=req.session

if(getusr){
sess.usr=getusr.usr
sess.pss=getusr.pss
sid=req.session.id
    usr=sess.usr
    pss=sess.pss

}else{console.log("no usr")}

next()}

const typBlo=function(req, res, next) {

par=req.params.id
typblo=db.typBlo(par)
next()}

const chk=function(req, res, next) {

console.log(getusr)
console.log(usr)
console.log(pss)
console.log(req.session.id)
console.log(sess)
next()}

// get
const gcb= function(req, res, next) {

res.render("index", {
title: par,par:par,usr:usr,typblo:typblo
});
}
const arr= [getUsr,getSid,typBlo,chk,gcb]

router.get('/', arr)
router.post('/', arr)

module.exports = router;
