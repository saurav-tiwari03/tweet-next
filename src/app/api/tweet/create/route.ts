import { connect } from "@/config/connect";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    return NextResponse.json({message:"Create a tweet"})
  } catch (error:any) {
    console.log(error);
    return NextResponse.json({message:error.message});
  }
}