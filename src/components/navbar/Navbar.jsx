import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-20 items-center p-5 ">
      <Link href="/">
        <div className="navbarBrand text-3xl font-extrabold">ShorTL</div>
      </Link>
      <ul className="flex gap-5 items-center">
        <li>
          <Link href="/auth/login">
            <button className="bg-[#181E29] px-7 py-2 rounded-full border border-[#353C4A] font-semibold text-white">
              Giris Yapin
            </button>
          </Link>
        </li>
        <li>
          <Link href="/auth/register">
            <button className="bg-[#144EE3] px-7 py-2 rounded-full border border-[#144EE3] font-semibold text-white boxShadow">
              Kayit Olun
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
