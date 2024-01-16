// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


const booking = () => {

    const options = [
        {
            label: 2,
            value: 2
        },
        {
            label: 3,
            value: 3
        },
        {
            label: 4,
            value: 4
        },
        {
            label: 6,
            value: 6
        }  
];


    return (
        <div><Navbar/>
        <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
        <div className="w-screen flex flex-row justify-center items-center gap-5">
        <hr className="w-40 rounded-md border-solid border-2 border-brightColor inline-block"/>
        <span className="text-brightColor text-3xl font-semibold text-center lg:pt-8 pt-3 pb-20">
        Booking Table </span>
        <hr className="w-40 rounded-md border-solid border-2 border-brightColor inline-block"/>
            </div>
        <div className="pb-40">
            <form className="w-full" action="">
                    <div className="text-logintext grid grid-cols-2 gap-x-40 gap-y-5 justify-center items-center outline-0">
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Name : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="Name "/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">User name : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="User name"/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Tabel ID : </p>
                            <input className="rounded-2xl w-96 h-10 p-3" type="text" placeholder="Table ID"/>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-brightColor font-semibold w-40">Number of <br /> persons : </p>
                              <select  onChange={(e) => {handleChange(e)}} className="w-96 h-10 rounded-2xl p-3">
                               {options.map((option) => (
                                   // eslint-disable-next-line react/jsx-key
                               <option value={option.value} className="pl-3" >{option.label}</option>
                               ))}
                                </select>
                            
                        </div>
                    </div>
                </form>
                <div className="flex flex-row justify-center items-center pt-20">
                    <button className="w-96 px-8 py-1 border-2  bg-black border-brightColor text-brightColor  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor">Book
                        </button>
                </div>

        </div>

        </div>       
            <Footer />
        </div>
    );
};

export default booking;
