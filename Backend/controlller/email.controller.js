const nodemailer=require('nodemailer')
const Emails = require('../model/email.model')

exports.sendingmail =async(req,res)=>{

    const {to,subject,message}= req.body

    try {

        const Email = new Emails({
            to,
            subject,
            message
        })

       await Email.save();

        let transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        }  
        )
        
        const mailoption={
            from:process.env.EMAIL_USER,
            to,
            subject,
            text:message
        }
    
       let info=await transporter.sendMail(mailoption)
       res.status(200).json({ success: true, info });
    } catch (error) {
        console.error('Error sending email:', error);
    }
}