// app create
const express=require("express");
const app=express();

require("dotenv").config();

// port find
const PORT=process.env.PORT || 7000;

// middleware add

const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(express.json());



// db se connect
const db=require("./config/database");
db.connect();

// cloud seconnect
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();


// api route mount

const Upload=require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);




// activate server
app.listen(PORT, () =>
    {
        console.log(`helloo PORT ho gya ha chalu port no ${PORT}`);
    })

  app.get("/",(req,res) =>{
        res.send("homepage h ye wala");
    })


