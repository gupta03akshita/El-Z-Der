import User from "../models/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.util.js";
import ErrorWrapper from "../utils/ErrorWrapper.util.js";

export const postAddAlert = ErrorWrapper(async (req,res, next) => {
    const { username, notification } = req.body;
    try{
        const user = await User.findOneAndUpdate(
            { username },
            { $push: { alerts: notification } },
            { new: true }
        ).exec();
        if(!user){
            throw new ErrorHandler("User not found", 404);
        }
        res.status(200).json({ success: true, message: "Alert added successfully", alert: user });
    }catch(error){
        throw new ErrorHandler(error.message, error.statusCode);
    }
})

export const postDeleteAlert = ErrorWrapper(async (req,res,next) => {
    const {alertId} = req.body;
    
})