// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../layouts/Button";
import Navbar from "./Navbar.jsx";
import {useNavigate} from "react-router-dom";
import menu3 from "../assets/img/menu3.jpg";

const Home = () => {
    let navigate=useNavigate();
    return (
            <div className=" h-screen w-screen flex flex-row sm:flex-row items-end  lg:px-32 px-5 bg-[url('./assets/img/215854241_pinterest-post.jpg')] sm:bg-[url('./assets/img/main.jpg')]  bg-center bg-contain bg-no-repeat bg-black">
        <div className="fixed top-0 left-0">
            <Navbar />
        </div>
        <div className="flex sm:flex-row flex-col  justify-center items-center pb-0 sm:pb-7 bg-black w-screen ">
        <div className="flex flex-row justify-between gap-3 item-center ">
        <h1 className=" text-backgroundColor font-semibold text-md sm:text-3xl">
          Enjoy OurDelicious Meal
        </h1>
        <div className="sm:w-10 sm:h-10">
        <img width={30} src={"./assets/img/luch.png"} />
        </div>
        </div>
        <div className=" lg:pl-44">
            <a
                className="hover:text-brightColor transition-all cursor-pointer"
                onClick={()=>(navigate('/booking',{replace:true}))}
            ><Button  title="Booking table" />
            </a>


        </div>
       </div>

    </div>
  );
};

export default Home;
