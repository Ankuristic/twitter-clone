const userService = require ("../service/userService")
const constants = require("../constants/index")

module.exports.signup = async (req,res) =>{
    let response = { ...constants.defaultServerResponse };
    try{
        console.log(req.body);
        const responseFromService = await userService.signup(req.body)
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService
    }
    catch(error){
        console.log("something went wrong :signup",error);
        response.message=error.message


    }

    return res.status(response.status).send(response);
}