import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header-border w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 md:py-5 lg:py-6">
  <div className="flex items-center gap-2 md:gap-3">
    <img src={logo} className="w-36 md:w-52 lg:w-67.5 h-auto" />
  </div>

  <div className="flex items-center gap-3 md:gap-5 lg:gap-6">
    <button className="btn-start text-white font-sansation text-[11px] md:text-sm lg:text-[16px] font-light px-3 md:px-4 lg:px-5 py-1.5 md:py-2">
      <span>Get Started</span>
    </button>

    <svg
      className="w-5 md:w-6 lg:w-6.5 h-5 md:h-6 lg:h-5.75"
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1.25V21.0307"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8.94275 5.86565L8.94275 21.2503"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16.6344 9.71145L16.6344 21.2499"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24.3271 1.25V21.0307"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
</header>
  );
}

export default Header;
