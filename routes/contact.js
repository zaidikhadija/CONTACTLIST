const express = require ('express')
//ou bien 2éme methode plus facile 
//const route=require('express').Route();
const router= express.Router();
const Contact =require('../models/Contact')

//@ path : http://localhost:5000/api/contacts
// get all users 
router.get("/",async(req,res)=>{
    try{
    const users= await Contact.find()
    res.json({msg:"data fetched",users})}
    catch(err){console.log(err)}})

//private or public
//*********
//@path : http://localhost:5000/api/contacts/:id
router.get('/:id',async(req,res)=>{
    try{
        
        const userss =await Contact.findById(req.params.id)
        res.json({msg:'data byid',userss})}
        catch(err){console.log(err)}})
 
//get users by id
// private or public


//@ path http://localhost:5000/api/contacts/addnewcontact
// add new contact 
router.post("/addnewcontact",async(req,res)=>{
    try{
    
   const newUser= new Contact({...req.body})
   const user =await newUser.save()
res.json({msg:"user created",user})
}catch(err){console.log(err)}})

//private or public

//@path:http://localhost:5000/api/contacts/deletecontact/:id
router.delete('/deletecontact/:id',async(req,res)=>{
    try{
        const user= await Contact.findOneAndDelete({_id:req.params.id})
        res.json({msg:"contact deleted",user })

    }catch(error){console.log(error)}
})
// delete contact
// private or publi
//************* *****/
//@path: http://localhost:5000/api/contacts/contactedited/:id
router.put('/contactedited/:id',async(req,res)=>{
    try{
    const user = await Contact.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
    res.json({msg:'contact edited',user})}
    catch(err){console.log(err)}

})
//edit contact
//public or private

module.exports=router;
