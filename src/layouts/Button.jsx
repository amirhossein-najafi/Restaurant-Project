// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-8 py-1 border-2  bg-brightColor border-brightColor text-blackColor  transition-all rounded-full">
          {/* eslint-disable-next-line react/prop-types */}
        {props.title}
      </button>
    </div>
  );
};

export default Button;
