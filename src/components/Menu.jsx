import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import {styled} from '@mui/system';
import {Tabs} from '@mui/base/Tabs';
import {TabsList as BaseTabsList} from '@mui/base/TabsList';
import {TabPanel as BaseTabPanel} from '@mui/base/TabPanel';
import {buttonClasses} from '@mui/base/Button';
import {Tab as BaseTab, tabClasses} from '@mui/base/Tab';
import Button from "../layouts/Button.jsx";
import Navbar from "./Navbar.jsx";

const Menu = () => {
    const orange = {
        50: '#F0F7FF',
        100: '#edb290',
        200: '#efa074',
        300: '#f6954a',
        400: '#ea8537',
        500: '#ec7e2c',
        600: '#ef791e',
        700: '#F26415',
        800: '#ed5c0b',
        900: '#f15700',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Tab = styled(BaseTab)`
      color: #090909;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      background-color: transparent;
      width: 100%;
      padding: 10px 12px;
      margin: 6px;
      border: none;
      border-radius: 7px;
      display: flex;
      justify-content: center;

      &:hover {
        background-color: ${orange[300]};
      }

      &:focus {
        color: #413a3a;
        outline: 3px solid ${orange[200]};
      }

      &.${tabClasses.selected} {
        background-color: #000000;
        color: ${orange[900]};
      }

      &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;

    const TabPanel = styled(BaseTabPanel)(
        ({theme}) => `
  width: 100%;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${'#000000'};
  border: 1px solid ${'#000000'};
  border-radius: 12px;
  opacity: 0.6;
  `,
    );

    const TabsList = styled(BaseTabsList)(
        ({theme}) => `
  min-width: 400px;
  background-color: ${orange[600]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
    );
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
            <div className="fixed top-0 left-0">
            <Navbar />
        </div>

        <div className="w-screen flex flex-col justify-center">
        <span className="text-brightColor text-3xl font-semibold text-center lg:pt-8 pt-3 pb-10">
        FOOD MENU</span>

            </div>
            <div className="bg-transparent flex flex-row gap-16 justify-center items-center">

                <Tabs defaultValue={1}>
                    <div className="flex flex-row gap-16 justify-center items-center">
                        <TabsList>
                            <Tab value={1}>
                                Salad
                            </Tab>
                            <Tab value={2}>Food</Tab>
                            <Tab value={3}>Coffee</Tab>
                        </TabsList>
                    </div>

                    <TabPanel className="w-screen h-screen  text-sm" value={1}>
                        <div className="text-whiteColor flex flex-wrap gap-8 justify-between">
                            <DishesCard img={menu1} title="Delicious Dish" price="$9.99"/>
                            <DishesCard img={menu2} title="Delicious Dish" price="$10.89"/>
                            <DishesCard img={menu3} title="Delicious Dish" price="$13.09"/>
                            <DishesCard img={menu1} title="Delicious Dish" price="$11.61"/>
                            <DishesCard img={menu2} title="Delicious Dish" price="$8.20"/>
                            <DishesCard img={menu3} title="Delicious Dish" price="$14.57"/>

                        </div>
                    </TabPanel>
                    <TabPanel className="w-full  text-sm" value={2}>
                        <div className="text-whiteColor flex flex-wrap gap-8 justify-between">
                            <DishesCard img={menu1} title="Delicious Dish" price="$16.99"/>
                            <DishesCard img={menu2} title="Delicious Dish" price="$18.99"/>
                            <DishesCard img={menu3} title="Delicious Dish" price="$14.99"/>
                            <DishesCard img={menu1} title="Delicious Dish" price="$16.99"/>
                            <DishesCard img={menu2} title="Delicious Dish" price="$18.99"/>
                            <DishesCard img={menu3} title="Delicious Dish" price="$14.99"/>
                        </div>
                    </TabPanel>
                    <TabPanel className="w-full  text-sm" value={3}>
                        <div className="text-whiteColor flex flex-wrap gap-8 justify-between">
                            <DishesCard img={menu1} title="Delicious Dish" price="$16.99"/>
                            <DishesCard img={menu2} title="Delicious Dish" price="$21.99"/>
                            <DishesCard img={menu3} title="Delicious Dish" price="$120.99"/>
                            <DishesCard img={menu1} title="Delicious Dish" price="$11.99"/>
                            <DishesCard img={menu2} title="Delicious Dish" price="$12.99"/>
                            <DishesCard img={menu3} title="Delicious Dish" price="$13.99"/>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            <div className="flex flex-row gap-16 justify-center items-center"><Button title="confirm and pay"/></div>

        </div>
    );
};

export default Menu;
