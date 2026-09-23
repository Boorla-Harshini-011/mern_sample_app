let mongoose=require("mongoose");
let userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["HR","EMPLOYEE"],
    }
});

let users=mongoose.model('users',userSchema);
module.exports={users};
