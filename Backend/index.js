
const express=require('express');
const app=express();
const dotenv=require('dotenv')
const cors=require('cors')
const emailRoute=require('./routes/email.route')
const mongoose=require('mongoose')

dotenv.config();

mongoose.connect(process.env.MONGO)
.then((conn)=>{
console.log('datbase connection successful'+conn)
})
.catch((err)=>{
console.log('DB Faile'+err)
})
app.use(cors())
app.use(express.json())
app.use('/api',emailRoute)



app.listen(process.env.PORT,()=>{
console.log('serving running')
})
