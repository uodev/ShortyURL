import { NextResponse } from "next/server";

export async function POST(request) {
  const { url } = await request.json();

  const res = await fetch("https://api-ssl.bitly.com/v4/bitlinks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ed4e545e8a30e795956f3280954e1a65f61434d9",
    },
    body: JSON.stringify({ long_url: url }),
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
