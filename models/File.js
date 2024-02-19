const mongoose=require("mongoose");
const nodemailer=require("nodemailer");

const fileSchema =new mongoose.Schema({

name:{
    type:String,
    required:true,
},
imageUrl:{
    type:String,
},

tags:{
    type:String,
},

email:{
    type:String,
}
})


// // post middleware

// fileSchema.post("save",async function(doc) {

//     try{
// // console.log("doc ke",doc);

// // transporter cretation shift to config 
    
//   let transporter =nodemailer.createTransport({

// host:process.env.MAIL_HOST,
// auth:
// {
//     user:process.env.MAIL_USER,
//     pass:process.env.MAIL_PASS,
// },
// })

// // send mail
// let info= await transporter.sendMail({
//     from:`ayush-the pilu`,
//     to:  doc.email,
//     subject:"new file uploaded on cloudinary",
//     html:`<h2>Hello jee</h2> <p>file uploaded</p>`,
// })
// console.log("inf object that we ar",info);
  
//     }
//     catch(error)
//     {
// console.error(error);
//     }

// })

const File=mongoose.model("File",fileSchema);
module.exports =File;