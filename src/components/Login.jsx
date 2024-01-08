// eslint-disable-next-line no-unused-vars
import React from "react";
import {Tabs} from "@mui/base/Tabs";
import DishesCard from "../layouts/DishesCard.jsx";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
const Login = () => {
    return (
        <div className=" text-white h-[100vh] flex justify-center items-center bg-black">
            <h1>
                Login
            </h1>
            <form action="">
                <div className="text-logintext">  <input type="text" alt="Username"/></div>
              {/*<div className="text-logintext" >   <input type="password" alt="Password"/></div>*/}

            </form>
        </div>

    );
};

export default Login;

