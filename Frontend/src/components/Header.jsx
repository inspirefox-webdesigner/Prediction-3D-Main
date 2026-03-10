import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header-border w-full flex justify-between items-center px-6 md:px-10 lg:px-16 py-6">
      <div className="flex items-center gap-3">
        <img src={logo} className="w-67.5 h-13.75" />
      </div>

      <div className="flex items-center gap-6">
        <button className="btn-start text-white font-sansation text-xs md:text-[16px] font-300">
  <span>Get Started</span>
</button>

        <svg
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 1.25V21.0307"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M8.94275 5.86565L8.94275 21.2503"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M16.6344 9.71145L16.6344 21.2499"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M24.3271 1.25V21.0307"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
