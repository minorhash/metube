var express = require('express');
var router = express.Router();
var db=require("dblo")
// glob
var par,typblo,getusr
var usr,pss,sess

var getUsr=function(req, res, next) {
sess=req.session
    usr=sess.usr
    pss=sess.pss

try{getusr=db.getUsr(usr,pss)
console.log(getusr)

}catch(err){
console.log(err)
console.log(getusr)
}


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
typblo=db.typBlo(par)
sess=req.session
next()}


var chk=function(req, res, next) {

console.log(par)
console.log(usr)
console.log(sess)
next()}

// get
var gcb= function(req, res, next) {

res.render("type", {
    title: par,par:par,typblo:typblo,usr:usr

});
}
var arr=[getUsr,typBlo,chk,gcb]
router.get('/type-:id',arr)
// post
router.post('/type-:id',arr)


module.exports = router;
