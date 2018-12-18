var express = require('express');
var router = express.Router();
var db=require("dblo")
// glob
let par="",id="",title="",tit="",ter="",typ="",lin="",body=""
let bod="",idblo={}

var posBod=function(req, res, next) {

par=req.params.id
bod=req.body
typ=bod.typ
ter=bod.ter
tit=bod.tit
lin=bod.lin
body=req.body.bod

    try{db.upTyp(typ,par)
        db.upTer(ter,par)
        db.upTit(tit,par)
        db.upLin(lin,par)
        db.upBod(body,par)}
    catch(err){console.log(err)}

next()}

var chk=function(req, res, next) {

console.log(par)
console.log("body")
console.log(bod)
next()}

// get
var gcb=(req, res, next)=>{

res.render("edit2", {
bod:bod,par:par,idblo:idblo

});
}

router.post('/edit2-:id', [posBod,chk,gcb])
// post

module.exports = router;
