import { connect } from "@/config/connect";
import { NextRequest, NextResponse } from "next/server";
import Tweet from "@/models/tweet";

connect();

export async function POST(req:NextRequest) {
  try {
    const reqData = await req.json();
    const {tweet} = reqData;
    const newTweet = await Tweet.create({tweet});
    return NextResponse.json({success:true,message:"Create a tweet",data:newTweet},{status:200})
  } catch (error:any) {
    console.log(error);
    return NextResponse.json({success:false,message:error.message},{status:500});
  }
}