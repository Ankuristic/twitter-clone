const mongoose = require('mongoose')



const connect = async () =>{
    await mongoose.connect("mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority")
}


export default connect