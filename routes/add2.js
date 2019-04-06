const express = require('express');
const router = express.Router();
const db=require("codblo")
// glob
let par="",id="",title="",bod="",titblo=""

const insBod=function(req, res, next) {

par=req.params.id
id=req.body.rowid
bod=req.body

const body=bod.bod
    const tit=bod.tit
    const ter=bod.ter
    const lin=bod.lin
    try{db.insBlo(par,ter,tit,lin,body)}
    catch(err){console.log(err)}

try{titblo=db.titBlo(tit)}
catch(err){console.log(err)}


next()}

const chk=function(req, res, next) {

console.log(par)
console.log(titblo)
console.log(bod)
next()}

// get
const gcb= (req, res, next)=>

res.render("add2", {
par:par,
bod:bod,titblo:titblo
});

const arr=[insBod,chk,gcb]

router.post('/add2-:id',arr)
// post


module.exports = router;
