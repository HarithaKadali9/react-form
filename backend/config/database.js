const mongoose = require("mongoose");
const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb+srv://HarithaKadali:Haritha23@namasthenode.edsir.mongodb.net/?retryWrites=true&w=majority&appName=NamastheNode/devTinder")
        console.log("MongoDB connected")
    }catch(err){
        console.log("Error occured while connecting DB", err);
    }
}
module.exports=connectDB;
