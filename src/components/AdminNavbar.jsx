import React, {useState} from "react";
import {BiRestaurant} from "react-icons/bi";
import Button from "../layouts/Button";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from "./SlidebarData.jsx";
import "./Navbar.css"



const AdminNavbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    let navigate=useNavigate();


    return (
        <div className="fixed w-screen  bg-black">
            <div>
                <div
                    className=" bg-black flex flex-row justify-between p-5 md:px-20  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className=" flex flex-row items-center cursor-pointer">
                            <div className='flex bg-black justify-start items-start'>
                                <Link to='#' className=' text-[2rem] bg-none text-brightColor'>
                                    <FaIcons.FaBars  onClick={showSidebar} />
                                </Link>
                            </div>
                            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                                <ul className='w-full' onClick={showSidebar}>
                                    <li className='bg-black w-full h-20 flex justify-start items-center'>
                                        <Link to='#' className='ml-8 text-3xl bg-none text-brightColor'>
                                            <AiIcons.AiOutlineCloseCircle  />
                                        </Link>
                                    </li>
                                    {SidebarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span className='ml-4' >{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>


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
                        > <Button title="Log out" />
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
                        onClick={()=>(navigate('/login',{replace:true}))}
                    >
                        <Button title="Log out" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;
