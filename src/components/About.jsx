import React, {useState} from "react";
import Navbar from "./Navbar.jsx";


const About = () => {

  return (

    <div className="bg-black min-h-screengrid flex sm:flex-row flex-col sm:gap-x-80 sm:px-32 px-5 py-40">
      <div className="fixed top-0 left-0">
        <Navbar />
      </div>

      <div className="grid sm:grid-rows-2 grid-cols-2 sm:gap-x-80 sm:gap-y-3 ">
        <div className="sm:w-60 sm:h-60">
          <img src="./assets/img/about-1.jpg" alt="img"/>
        </div>
        <div className="sm:w-40 sm:h-40 sm:pt-10">
          <img src="./assets/img/about-3.jpg" alt="img"/>
        </div>
        <div className="sm:w-40 sm:h-40 sm:pt-10">
          <img src="./assets/img/about-4.jpg" alt="img"/>
        </div>
        <div className="sm:w-60 sm:h-60">
          <img src="./assets/img/about-2.jpg" alt="img"/>
        </div>
      </div>
      <div className=" space-y-4 sm:pt-14 content-center">
        <h1 className="text-green mt-4 font-semibold text-lg sm:text-4xl text-center sm:text-start">
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
        <hr className="rotate-90 w-10 border-solid border-2 border-brightColor inline-block"/>
        <p className="font-semibold text-brightColor text-lg sm:text-3xl inline-block pr-4">
          15
        </p>
        <p className="font-semibold text-green text-lg sm:text-1xl inline-block ">
          Years Of <br />
          Exprience
        </p>
      </div>
    </div>

  );
};

export default About;
