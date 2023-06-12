import User from "@/model/user.model";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import connectDB from "@/utils/db";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    await connectDB();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.error({
        success: false,
        status: 400,
        message: "User not found",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.error({
        success: false,
        status: 400,
        message: "Invalid credentials",
      });
    }

    return NextResponse.json({
      success: true,
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return NextResponse.error({
      success: false,
      status: 400,
      message: error.message,
    });
  }
}
