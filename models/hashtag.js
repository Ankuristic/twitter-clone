import {ObjectId} from "bson";
import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({

    text:{
        type:String,
        required:true,
        unique:true
    },


    tweets: [
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]


  
})


const hashtag = mongoose.model('Hashtag',hashtagSchema)

export default hashtag;