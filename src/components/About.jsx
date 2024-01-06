import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    
    <div className="bg-black min-h-screengrid flex flex-row gap-x-80 lg:px-32 px-5 py-40">
      <div className="grid grid-cols-2 gap-x-80 gap-y-3 ">
        <div className="w-60 h-60">
          <img src="./assets/img/about-1.jpg" alt="img"/>
        </div>
        <div className="w-40 h-40 pt-10">
          <img src="./assets/img/about-3.jpg" alt="img"/>
        </div>
        <div className="w-40 h-40 pt-10">
          <img src="./assets/img/about-4.jpg" alt="img"/>
        </div>
        <div className="w-60 h-60">
          <img src="./assets/img/about-2.jpg" alt="img"/>
        </div>
      </div>
      <div className=" space-y-4 lg:pt-14 content-center">
        <h1 className="text-green font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p className="text-backgroundColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          architecto quisquam delectus minima perferendis nulla 
          laborum, exercitationem cum quo accusantium, impedit sed
          molestias omnis reprehenderit quae animi? Explicab
          laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p className="text-backgroundColor">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit,
          suscipit reiciendis accusamus recusandae eum aspernatur
          veritatis facere. Magnam!
        </p>
        <hr className="rotate-90 w-10 border-solid border-2 border-backgroundColor inline-block "/>
        <p className="font-semibold text-brightColor text-3xl inline-block pr-4">
          15
        </p>
        <p className="font-semibold text-green text-1xl inline-block ">
          Years Of <br />
          Exprience
        </p>
      </div>
    </div>
  );
};

export default About;
