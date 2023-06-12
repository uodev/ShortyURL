import User from "@/model/user.model";
import { NextResponse } from "next/server";
import connectDB from "@/utils/db";

import bcryptjs from "bcryptjs";
export async function POST(request) {
  const { name, email, password } = await request.json();

  try {
    await connectDB();
    const hashedPassword = await bcryptjs.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

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
