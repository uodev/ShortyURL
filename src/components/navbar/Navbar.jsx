import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-20 items-center p-5 ">
      <div className="navbarBrand text-3xl font-extrabold">ShorTL</div>
      <ul className="flex gap-5 items-center">
        <li>
          <button className="bg-[#181E29] px-7 py-2 rounded-full border border-[#353C4A] font-semibold text-white">
            Login
          </button>
        </li>
        <li>
          <button className="bg-[#144EE3] px-7 py-2 rounded-full border border-[#144EE3] font-semibold text-white boxShadow">
            Register Now
          </button>
        </li>
      </ul>
    </nav>
  );
}
