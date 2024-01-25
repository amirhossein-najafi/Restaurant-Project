// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-8 py-1 border-2  bg-black border-brightColor text-brightColor  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor">
          {/* eslint-disable-next-line react/prop-types */}
        {props.title}
      </button>
    </div>
  );
};

export default Button;
