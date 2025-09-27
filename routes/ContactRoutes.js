const express = require("express");
const ContactModel = require("../models/ContactModel")
const router = express.Router();

router.post("/", async(req,res)=>{
   const {name,email,subject,message} = req.body;
   if(!name || !email || !subject || !message){
    return res.status(400).json({messgae: "All Fields are required"});
   }
   try {
    const contact = new Contact({name,email,subject,message});
    await contact.save();
    res.status(201).json({success: true, message: "Contact Form SUbmitted Successfully"})
   } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
   }
});

module.exports = router;