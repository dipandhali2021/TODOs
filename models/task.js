import mongoose from "mongoose";

// making models
const schema = new  mongoose.Schema({
    title: {
        type : String,
        required:true,
    },
    discription:{
        type:String,
        unique: true,
        required: true,
    },
    isCompleted: {
        type : Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    createdAt:{
        type: Date,
        default:Date.now(),
    }
});

export const Task = mongoose.model("Task",schema);