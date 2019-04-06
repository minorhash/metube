var express = require('express');
var router = express.Router();
// glob

const db=require("codblo")
var par,typblo,getusr
var usr,pss,sess,host

var getUsr=function(req, res, next) {
sess=req.session
    usr=sess.usr
    pss=sess.pss

try{getusr=db.getUsr(usr,pss)
console.log(getusr)
}catch(err){console.log(err)}

next()}

var getSid=function(req, res, next) {
sess=req.session

if(usr && pss){
if(!getusr.sid){
sess.usr=req.body.name
sess.pss=req.body.pss
sid=req.sessionID

try{db.upSid(sid,usr,pss)}
catch(err){console.log(err)}

}else{

try{getsid=db.getSid(usr,pss)
sid=getsid.sid
}
catch(err){console.log(err)}
}
}else{console.log("no usr")}

next()}

var typBlo=function(req, res, next) {

par=req.params.id
sess=req.session
    //typblo=db.typBlo(par)
next()}

const getLs=function(req, res, next) {
par=req.params.id
vid=req.params.vid
sess=req.session

const ls=require("ls")

img=ls("public/"+par+"/*.jpg")
    //img=ls("public/<%= par %>/*.jpg")
    const que=require("request")
    host=req.originalUrl

next()}

var chk=function(req, res, next) {

console.log(par)
console.log(vid)
console.log(usr)
//console.log(host)
next()}

// get
var gcb= function(req, res, next) {

res.render("vid", {
title: par,par:par,usr:usr,ls:img

});
}
var arr=[getUsr,getLs,chk,gcb]
router.get('/vid-:id-:vid',arr)
// post
router.post('/vid-:id-:vid',arr)


module.exports = router;
