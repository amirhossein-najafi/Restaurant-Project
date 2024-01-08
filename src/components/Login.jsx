// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div><Navbar/>
            <div className=" text-white h-[100vh] flex flex-col justify-center items-center bg-black pb-60">
                <div className="bg-black text-brightColor text-3xl font-semibold justify-center items-center lg:pt-8 pb-12">
                    <h1>
                    Login
                </h1>
                </div>

                <form className="w-full" action="">
                    <div className="text-logintext flex flex-col gap-4 justify-center items-center outline-0">
                        <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="Username "/>
                        <input className="rounded-2xl w-96 h-10 p-3" type="password" placeholder="Password" alt="Password"/>
                        
                    </div>
                </form>
                <div className="flex flex-row gap-16 justify-center items-center w-screen pt-8">
                <Link 
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        <button className="w-96 px-8 py-1 border-2  bg-black border-brightColor text-brightColor  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor">Log In
                        </button>
                        </Link>
                    
                    </div>
                    <div className="flex flex-row gap-16 justify-center items-center w-screen">
                        <Link 
                        to="Sign up"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="text-brightColor underline pt-3">
                        you do not have an account ? create one !
                        </Link>
                    </div>
            </div>
            <Footer />
        </div>


    );
};

export default Login;

