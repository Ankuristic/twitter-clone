const express = require('express')
// Import the mongoose module
const mongoose = require("mongoose");
const app = express();


app.listen(3000,async () =>{
     console.log("server stated at 3000")

mongoose.connect("mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority");
console.log("mongodb connectd")

})


app.listen(30000)

console.log('app is listening at 3000')