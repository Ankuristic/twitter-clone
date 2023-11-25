const User = require ("../models/user")

module.exports.signup = async({email,password})=>{
    try{

        const user = await User.findOne({email});
        const newUser = new User ({emai,password});
        let result = await  newUser.save()

    }

    catch(err){
        console.log("SOMETHING WENT WRONG",err);
        throw new Error(err);
    }
}