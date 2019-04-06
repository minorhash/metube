const express = require('express');
const router = express.Router();
const db=require("codblo")
// glob
let par="",sess="",sid=""
let getusr="",typblo=""
let usr="",pss=""
let img=""

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


const getLs=function(req, res, next) {
const ls=require("ls")
img=ls("public/ppcandy/*.jpg")
console.log(img[0].name)

next()}

const typBlo=function(req, res, next) {

par=req.params.id
typblo=db.typBlo(par)
next()}

const chk=function(req, res, next) {

console.log(req.session.id)
console.log(sess)
next()}

// get
const gcb= function(req, res, next) {

res.render("index", {
title: par,par:par,usr:usr,typblo:typblo,ls:img
});
}
const arr= [getUsr,getSid,getLs,typBlo,chk,gcb]

router.get('/', arr)
router.post('/', arr)

module.exports = router;
