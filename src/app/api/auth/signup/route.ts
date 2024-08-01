import { connect } from "@/config/connect";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { name,username,email, password } = reqData;
    console.log(name, username, email, password);
    const newUser = await User.create({ name, username, email, password });
    return NextResponse.json({ success: true, message: "User created successfully", data: newUser }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error creating user", error }, { status: 500 });
  }
}
