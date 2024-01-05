// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {Link} from "react-scroll";
import {BiRestaurant} from "react-icons/bi";
import Button from "../layouts/Button";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

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
                        className=" text-green hidden md:flex flex-row items-center text-lg font-medium gap-8 bg-black">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            About
                        </Link>

                        <Link
                            to="menu"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Menu
                        </Link>


                        <Button title="Login" />
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
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>

                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Menu
                    </Link>


                    <Button title="Login" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
