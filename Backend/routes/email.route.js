const express=require('express')
const emailController=require('../controlller/email.controller')
const route=express.Router()
route.post('/sendmail',emailController.sendingmail)


module.exports=route