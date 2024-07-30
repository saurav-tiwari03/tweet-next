import { connect } from "@/config/connect";
import Tweet from "@/models/tweet";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE (req:NextRequest,{params}: any){
  try {
    const {id} = params;
    if (!id) {
      return NextResponse.json({success: false,message: 'Tweet ID is required'},{ status: 400 });
    }
    const tweet = await Tweet.findByIdAndDelete(id);
    return NextResponse.json({success: true,message:"Tweet deleted successfully"},{status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({success: false,message:"Error while deleting tweet"},{status: 500});
  }
}