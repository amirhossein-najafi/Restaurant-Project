import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" h-screen w-screen flex flex-row items-end   lg:px-32 px-5 bg-[url('./assets/img/main.jpg')] bg-contain bg-no-repeat ">
        <div className="flex flex-row  justify-center items-center  bg-black w-screen">
        <h1 className=" text-backgroundColor font-semibold text-3xl ">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <div className=" lg:pl-44">
          <Button title="Booking table" />
        </div>
       </div>

    </div>
  );
};

export default Home;
