import { connect } from "@/config/connect";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { username,email, password } = reqData;
    console.log(username, email,password);
    const user = await User.findOne({$or:[{username},{email}]});
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }
    const check = (user.password === password);
    if(!check) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }
    user.password = undefined;
    return NextResponse.json({ success: true, message: "User logged in successfully", data: user }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error creating user", error }, { status: 500 });
  }
}
