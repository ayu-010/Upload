 const File=require("../models/File");

 const cloudinary=require("cloudinary").v2;

exports.localFileUpload = async(req,res) =>{
 try{
    //    fetch the files
    const file=req.files.file;
    console.log("FIle me kya h dekh lo bhai ",file);

    // server ke kis path pe store karna chathe ho 

    let path=__dirname  +"/files/"+ Date.now() + `.${file.name.split('.')[1]}` ;

    console.log("PATH=>",path);
     file.mv(path,(err) =>
    { 
        console.log(err);
    });

    res.json({
        sucess:true,
        message:"local file uploaded sucessfully",
     });

 } 
 catch(error)
 {
console.log(error);
 }

} 

// image uploader

function isFileTypeSupported(type,supportedTypes)
{
    return supportedTypes.includes(type);
}


async function uploadFileToCloudinary(file,folder,quality)
{   
    const options={folder};

    if(quality)
    {
        options.quality=quality;
    }
    options.resource_type="auto";
  return  await cloudinary.uploader.upload(file.tempFilePath,options);
}


// image upload andler
exports.imageUpload = async (req,res) =>
{
try{

  //  data fetch
  const{name,tags,email}=req.body;
  console.log(name,tags,email); 
  const file=req.files.imagefile;
  console.log(file);


  //    validation


const supportedTypes=["jpg","png","jpeg"];
const fileType=file.name.split('.')[1].toLowerCase();


if(!isFileTypeSupported(fileType,supportedTypes))
{
    return res.status(400).json({
        sucess:false,
        message:"file format not supported",
    })
}

// file format supported cloudinary pe upload kar do 

const response=await uploadFileToCloudinary(file,"Ayush");
console.log(response);

// db me entry save
const fileData=await File.create({
name,
tags,
email, 
imageUrl:response.secure_url,
});

res.json({
    success:true,
    imageurl:response.secure_url,
    message:"image uploaded sucessfully",
})


}
catch(error)
{
console.error(error);
res.status(400).json({
    success:false,
    messaqge:"wsomething went wrong",
});
}
}

// video handler
exports.videoUpload = async (req,res) =>
{
try{

  //  data fetch
  const{name,tags,email}=req.body;
  console.log(name,tags,email); 
  const file=req.files.videofile;
  console.log(file);


  //    validation


const supportedTypes=["mp4","mov"];
const fileType=file.name.split('.')[1].toLowerCase();


if(!isFileTypeSupported(fileType,supportedTypes))
{
    return res.status(400).json({
        sucess:false,
        message:"file format not supported",
    })
}

// file format supported cloudinary pe upload kar do 
console.log("cloudinary ke pehle khade h hum");
const response=await uploadFileToCloudinary(file,"Ayush");
console.log(response);

// db me entry save
const fileData=await File.create({
name,
tags,
email, 
imageUrl:response.secure_url,
});

res.json({
    success:true,
    imageurl:response.secure_url,
    message:"video uploaded sucessfully",
})


}
catch(error)
{
console.error(error);
res.status(400).json({
    success:false,
    messaqge:"wsomething went wrong",
});
}
}

// image reducer

exports.imageSizeReducer= async (req,res) =>
{
try{

  //  data fetch
  const{name,tags,email}=req.body;
  console.log(name,tags,email); 
  const file=req.files.imagefile;
  console.log(file);


  //    validation


const supportedTypes=["jpg","png","jpeg"];
const fileType=file.name.split('.')[1].toLowerCase();


if(!isFileTypeSupported(fileType,supportedTypes))
{
    return res.status(400).json({
        sucess:false,
        message:"file format not supported",
    })
}

// file format supported cloudinary pe upload kar do 

const response=await uploadFileToCloudinary(file,"Ayush",30);
console.log(response);

// db me entry save
const fileData=await File.create({
name,
tags,
email, 
imageUrl:response.secure_url,
});

res.json({
    success:true,
    imageurl:response.secure_url,
    message:"image uploaded sucessfully",
})


}
catch(error)
{
console.error(error);
res.status(400).json({
    success:false,
    messaqge:"wsomething went wrong",
});
}
}

