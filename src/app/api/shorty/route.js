import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Link from "@/model/link.model";
export async function POST(request) {
  const { url, userId } = await request.json();

  try {
    const res = await fetch("https://api-ssl.bitly.com/v4/bitlinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ed4e545e8a30e795956f3280954e1a65f61434d9",
      },
      body: JSON.stringify({ long_url: url }),
    });

    if (!res.ok) {
      return NextResponse.error();
    }

    const data = await res.json();

    await connectDB();
    await Link.create({
      longUrl: url,
      shortUrl: data.link,
      user: userId,
    });

    return NextResponse.json({
      success: true,
      status: 201,
      message: "Link created successfully",
    });
  } catch (error) {
    return NextResponse.error({
      success: false,
      status: 400,
      message: error.message,
    });
  }
}
