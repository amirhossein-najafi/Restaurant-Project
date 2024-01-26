// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";


const Login = () => {
    let navigate=useNavigate();

    return (
        <div><Navbar/>
            <div className=" text-white sm:h-[100vh] flex flex-col justify-center items-center bg-black pb-60">
                <div className="bg-black text-brightColor text-3xl font-semibold justify-center items-center pt-20 pb-12">
                    <h1>
                    Login
                </h1>
                </div>

                <form className="w-full" action="">
                    <div className="text-logintext flex flex-col gap-4 justify-center items-center outline-0">
                        <input className="rounded-2xl w-80 p-3 h-8 sm:w-96 sm:h-10 sm:p-3" type="text" placeholder="Username "/>
                        <input className="rounded-2xl w-80 p-3 h-8 sm:w-96 sm:h-10 sm:p-3" type="password" placeholder="Password" alt="Password"/>
                        
                    </div>
                </form>
                <div className="flex flex-col sm:flex-row gap-16 justify-center items-center w-screen pt-8">
                <a onClick={() => {alert('login successfully');}}

                        >
                        <button  onClick={()=>(navigate('/dashboard',{replace:true}))}
                                 className=" w-80  h-8 sm:w-96 sm:h-10 sm:p-3 border-2  bg-black border-brightColor text-brightColor  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor">Log In
                        </button>
                        </a>
                    
                    </div>
                    <div className="flex flex-row gap-16 justify-center items-center w-screen">
                        <a
                            className="text-brightColor underline pt-3 cursor-pointer sm:text-lg text-sm"
                            onClick={()=>(navigate('/sign up',{replace:true}))}
                        >
                        you do not have an account ? create one !
                        </a>
                    </div>
            </div>
            <Footer />
        </div>


    );
};

export default Login;

