// eslint-disable-next-line no-unused-vars
import React from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";
import img1 from "../assets/img/icons8-combo-chart-50.png";



function Dashboard() {
    const data1 = [
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
    ]
    const data2 = [
        { Month: "June", Revenue: "500$" },
        { Month: "July", Revenue: "600$" },
        { Month: "January", Revenue: "1100$" },
        { Month: "February", Revenue: "700$" },
        { Month: "March", Revenue: "900$" },
        { Month: "April", Revenue: "550$" },
        { Month: "May", Revenue: "476$" },
        { Month: "August", Revenue: "870$" },
        { Month: "September", Revenue: "514$" },
        { Month: "October", Revenue: "630$" },
        { Month: "November", Revenue: "155$" },
        { Month: "December", Revenue: "990$" },
    ]
    return (
        <div>
            <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
            <div className="fixed top-0 left-0">
                <AdminNavbar/>
            </div>

            <div className="w-screen flex flex-row justify-evenly ">
                <div className="flex flex-row bg-panelGreen h-[164px] w-[326px] rounded-[20px] pt-10 pl-5 text-2xl"><span className="w-180 h-100">New Users<br/>
                <span className=" w-180 h-100 text-brightColor p">7,333 </span>

                    <img className="ml-48 mt-2" src={img1} alt=""/>
            </span></div>
                <div className="bg-panelGreen h-[164px] w-[326px] rounded-[20px] pt-10 pl-5 text-2xl"><span>Total Orders <br/>
                <span className="text-brightColor p">48,853</span>
            </span></div>

            </div>
            <div className=" w-screen flex flex-row justify-evenly ">
                <div className="mt-16">
                    <table  className="rounded-[20px] text-black bg-[#8D684D] w-[472px] h-[551px]">
                        <div className= "flex flex-row justify-around  rounded-t-[20px] bg-[#8D684D] border-b-[1px] border-b-black mt-6 ml-4 text-1xl">
                            RECENT ORDERS REQUESTED <button className="w-40 px-8 py-1 border-2  bg-brightColor border-brightColor text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor"> view all</button></div>
                        <tr>

                            <th className="border-b-[1px] border-b-black">FoodItem</th>
                            <th className="border-b-[1px] border-b-black">Price</th>
                            <th className="border-b-[1px] border-b-black">FoodID</th>
                        </tr>
                        {data1.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.FoodItem}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.price}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.FoodID}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div className="mt-16">
                    <table className="rounded-[20px] text-black bg-[#8D684D]  w-[450px] h-[530px]">
                        <tr>
                            <th className=" border-b-[1px] border-b-black">Month</th>
                            <th className="border-b-[1px] border-b-black">Revenue</th>
                        </tr>
                        {data2.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.Month}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.Revenue}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

            </div>
        </div>
        </div>

        );
    };
export default Dashboard;