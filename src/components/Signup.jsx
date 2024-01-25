// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const Signup = () => {

    return (
        <div><Navbar/>
        <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
        <div className="w-screen flex flex-col justify-center">
        <span className="text-brightColor text-3xl font-semibold text-center lg:pt-8 pt-3 pb-20">
        Create an Account</span>
            </div>
        <div className="pb-40">
            <form className="w-full" action="">
                    <div className="text-logintext grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-5 justify-center items-center outline-0">
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">User name : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="Username "/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Password : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="password" placeholder="Password" alt="Password"/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">First name : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="First name "/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Last name : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="Last name "/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Phone number : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="tel" placeholder="Phone number "/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Address : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="Address "/>
                        </div> 
                    </div>
                </form>
                <div className="flex flex-row justify-center items-center pt-20">
                    <button className=" w-80  h-8 sm:w-96 sm:h-10 sm:p-3 border-2  bg-black border-brightColor text-brightColor  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor">Create
                        </button>
                </div>

        </div>

        </div>
            <Footer />
        </div>
    );
};

export default Signup;

