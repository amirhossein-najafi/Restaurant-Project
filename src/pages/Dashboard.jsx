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
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" },
        { FoodItem: "CHICKEN BURGER", price: "115$", FoodID: "123rty" }
        
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
            <div className="bg-black  lg:h-full flex flex-col justify-center items-center p-32 ">
            <div className="fixed top-0 left-0">
                <AdminNavbar/>
            </div>

            <div className="w-screen flex flex-row gap-2 mt-16 justify-evenly ">
                <div className="flex flex-row bg-panelGreen md:h-[164px] md:w-[326px] sm:h-[140px] sm:w-[220] h-[120px] w-[180px] rounded-[20px] pt-10 pl-5 text-sm sm:text-2xl"><span className="">New Users<br/>
                <span className=" text-brightColor ">7,333 </span>

            </span></div>
                <div className="flex flex-row  bg-panelGreen sm:h-[140px] sm:w-[220] md:h-[164px] md:w-[326px] h-[120px] w-[180px] rounded-[20px] pt-10 pl-5  text-sm sm:text-2xl"><span>Total Orders <br/>
                <span className="text-brightColor">48,853</span>
            </span></div>

            </div>
            <div className=" w-screen flex flex-col md:flex-row  justify-center sm:justify-evenly ">
                <div className="mt-20 sm:mt-16">
                    <table  className="rounded-[20px] text-black bg-[#8D684D] w-[50px] h-[100px] lg:w-[472px] lg:h-[551px]">
                        <div className= "flex flex-row justify-between gap-x-120 rounded-t-[20px] bg-[#8D684D] mt-8  ml-4 text-[10px] lg:text-1xl">
                            <p>RECENT ORDERS REQUESTED </p>
                            <button className="mb-2 text-[9px] lg:text-lg lg:h-10 lg:w-40 px-8 py-1 border-2  bg-brightColor border-brightColor text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-full hover:bg-brightColor hover:text-blackColor"> view all</button>
                            </div>
                            <div style={{ borderTop: "2px solid #000 ",width : 200 }}></div>
                        <tr>

                            <th className="border-b-[1px] border-b-black lg:pr-80 md:pr-40">FoodItem</th>
                            <th className="border-b-[1px] border-b-black">Price</th>
                            <th className="border-b-[1px] border-b-black">FoodID</th>
                        </tr>
                        {data1.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className="text-sm pl-4 border-b-[1px] border-b-black">{val.FoodItem}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.price}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.FoodID}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div className="mt-16">
                    <table className="rounded-[20px] text-black bg-[#8D684D] w-[300px] h-[400px]  lg:w-[450px] lg:h-[530px]">
                        <tr>
                            <th className=" border-b-[1px] border-b-black lg:pr-80 md:pr-40">Month</th>
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