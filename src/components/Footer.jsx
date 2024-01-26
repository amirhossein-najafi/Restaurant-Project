import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black md:h-full text-white ">
      <div className="bg-black flex flex-col sm:flex-row justify-around justify-items-start p-8 sm:px-32 px-5">
        <div>
          <h1 className="text-brightColor font-medium text-lg lg:text-xl pb-4 pt-5 sm:pt-0">Contact Us</h1>
          <nav className="text-footerColor flex flex-col gap-2">
            <a
                className="text-sm lg:text-lg hover:text-brightColor transition-all cursor-pointer"
                href="/"
            >
              A108 Adam StreetNY535022,USA
            </a>
            <a
                className="text-sm lg:text-lg hover:text-brightColor transition-all cursor-pointer"
                href="/"
            >
              RestourantWeb@gmail.com
            </a>
            <a
                className="text-sm lg:text-lg hover:text-brightColor transition-all cursor-pointer"
                href="/"
            >
              +012 345 67890
            </a>
          </nav>
        </div>
        <div>
          <h1 className="text-brightColor font-medium text-lg lg:text-xl pb-4 pt-5 sm:pt-0">Opening</h1>
          <nav className="text-footerColor flex flex-col gap-2">
            <a
              className="text-sm lg:text-lg hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Monday - Saturday<br/>
              09AM - 09PM

            </a>
            <a
              className="text-sm lg:text-lg hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Sunday<br/>
              10AM - 08PM
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className="text-sm lg:text-lg text-center py-4">
            @copyright developed by
            <span className="text-sm lg:text-lg text-brightColor"> programmers</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
