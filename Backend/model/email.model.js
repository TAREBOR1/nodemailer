
const mongoose=require('mongoose')

const EmailSchema= new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Emails = mongoose.model('Emails',EmailSchema)

module.exports= Emails