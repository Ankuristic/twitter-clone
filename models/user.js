const mongoose =  'mongoose'
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema ({
    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String
    },

    bio:{
        type:String,

    },

    tweets:[

        {
            types:mongoose.Schema.Types.ObjectId
        }

    ],

    name :{
        type:String
    }

})

UserSchema.pre('save',function(next){
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password.salt);
    user.password= encryptedPassword;
    next();
})


const User = mongoose.model('User',UserSchema);


export default User;