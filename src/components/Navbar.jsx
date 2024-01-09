// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {BiRestaurant} from "react-icons/bi";
import Button from "../layouts/Button";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };


    let navigate=useNavigate();


    return (
        <div className="fixed w-screen  bg-black">
            <div>
                <div
                    className=" bg-black flex flex-row justify-between p-5 md:px-20  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} color="#10D352"/>
            </span>
                        <h1 className="text-brightColor text-xl font-semibold">Restourant</h1>
                    </div>

                    <nav
                        className=" text-green hidden md:flex flex-row items-center text-lg font-medium gap-8 bg-black ">
                        <a
                            className="hover:text-brightColor transition-all cursor-pointer"
                            onClick={()=>(navigate('/home',{replace:true}))}
                        >
                            Home</a>


                        <a
                            className="hover:text-brightColor transition-all cursor-pointer"
                            onClick={()=>(navigate('/about',{replace:true}))}
                        >
                            About
                        </a>

                        <a
                            className="hover:text-brightColor transition-all cursor-pointer"
                            onClick={()=>(navigate('/menu',{replace:true}))}
                        >
                            Menu
                        </a>


                        <a
                            className="hover:text-brightColor transition-all cursor-pointer"
                            onClick={()=>(navigate('/login',{replace:true}))}
                        ><Button title="Login" />
                        </a>
                    </nav>

                    <div className="md:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange}/>
                        ) : (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                        )}
                    </div>
                </div>
                <div
                    className={` ${
                        menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
                >
                    <a
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={()=>(navigate('/home',{replace:true}))}
                    >
                        Home
                    </a>

                    <a
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={()=>(navigate('/about',{replace:true}))}
                    >
                        About
                    </a>
                    <a
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={()=>(navigate('/menu',{replace:true}))}
                    >
                        Menu
                    </a>

                    <a
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={()=>(navigate('/home',{replace:true}))}
                    >
                    <Button title="Login" />
                </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
