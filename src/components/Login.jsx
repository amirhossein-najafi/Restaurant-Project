// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";

const Login = () => {
    return (
        <div><Navbar/>
            <div className=" text-white h-[100vh] flex justify-center items-center bg-black">
                <div className="text-brightColor text-3xl font-semibold text-center lg:pt-8 pt-24 pb-96"><h1>
                    Login
                </h1></div>

                <form className="w-96" action="">
                    <div className="text-logintext flex flex-col gap-2.5 justify-center items-center outline-0 ">
                        <input className="rounded-2xl w-50 h-10" type="text" placeholder=" Username"/>
                        <input className="rounded-2xl w-50 h-10" type="password" placeholder=" Password" alt="Password"/>
                    </div>


                </form>
            </div>
        </div>


    );
};

export default Login;

