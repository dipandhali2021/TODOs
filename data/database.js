import mongoose from "mongoose";

//connnecting database

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"backendapi",
    }).then((c)=> console.log(`database connected with ${c.connection.host}`))
    .catch((e)=> console.log(e));
} 