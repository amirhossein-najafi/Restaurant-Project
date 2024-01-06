import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-brightColor text-3xl font-semibold text-center lg:pt-8 pt-24 pb-40">
        FOOD MENU
      </h1>

      <div className="text-whiteColor flex flex-wrap gap-8 justify-between">
        <DishesCard img={menu1} title="Delicious Dish" price="$16.99" />
        <DishesCard img={menu2} title="Delicious Dish" price="$18.99" />
        <DishesCard img={menu3} title="Delicious Dish" price="$14.99" />
        
      </div>
    </div>
  );
};

export default Menu;
