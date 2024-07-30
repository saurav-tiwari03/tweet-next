import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  tweet:{
    type:String,
    required:true
  },
},{timestamps:true})

const Tweet = mongoose.models.tweet || mongoose.model("tweet",tweetSchema);

export default Tweet;