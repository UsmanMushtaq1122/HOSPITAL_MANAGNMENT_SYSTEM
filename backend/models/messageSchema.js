import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        minLength:[3,"First Name Contain at Least 3 Character"]
    },
    lastName:{
        type:String,
        required: true,
        minLength:[3,"Last Name Contain at Least 3 Character"]
    },
    email:{
        type:String,
        required: true,
       validate:[validator.isEmail,"please provide valid email"]
    },
    phone:{
        type:String,
        required: true,
        minLength:[11,"Phone number must  contain exact  11 digits"],
        maxLength:[11,"Phone number must  contain exact  11 digits"]
    },
    message:{
        type:String,
        required: true,
        minLength:[10,"message must  contain At Least   10 character"],
       
    },

});
export  const Message = mongoose.model("Message",messageSchema)