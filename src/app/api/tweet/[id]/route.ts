import Tweet from "@/models/tweet";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req:NextRequest,{params}:any) {
  try {
    const {id} = params;
    if (!id) {
      return NextResponse.json({success: false,message: 'Tweet ID is required'},{ status: 400 });
    }
    const tweet = await Tweet.findById(id);
    if(!tweet) {
      return NextResponse.json({success: false,message: 'Tweet not found'},{ status: 404 });
    }
    return NextResponse.json({success: true, data: tweet});
  } catch (error) {
    console.log(error);
    return NextResponse.json({success: false, message:"Error fetching tweet with id"});
  }
}