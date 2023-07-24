import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req,res,next)=>{
    try {
        const {title,discription} = req.body;
    
    await Task.create({
        title,
        discription,
        user:req.user,
    })

    res.status(201).json({
        success:true,
        message:"task added sucessuffuly"
    })


    } catch (error) {
        next(error);
    }
};



export const getMyTask = async(req,res,next)=>{
    try {
        //get all task of current logged in users
    const userid = req.user._id;

    const tasks = await Task.find({user:userid});

    res.status(200).json({
        success:true,
        tasks
    })
    } catch (error) {
        next(error)
    }

}
export const upadateTask = async(req,res,next)=>{
    try {
        const task = await Task.findById(req.params.id)
    if(!task) return next(new ErrorHandler("task not found", 404))
    task.isCompleted = !task.isCompleted
    await task.save();

    res.status(200).json({
        success:true,
        message:"Task Updated"
       
    })
    } catch (error) {
        next(error)
    }

}
export const deleteTask = async(req,res,next)=>{
    try {
        const task = await Task.findById(req.params.id)
if(!task) return next(new ErrorHandler("task not found", 404))
    await task.deleteOne();
    res.status(200).json({
        success:true,
        message:"Task Deleted Sucessfully!"
       
    })
    } catch (error) {
        next(error)
    }

}