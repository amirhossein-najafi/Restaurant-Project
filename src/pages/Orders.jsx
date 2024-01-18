import React from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";
import * as FaIcons from 'react-icons/fa';
import Button from "../layouts/Button.jsx";
import "../index.css"


function Orders() {
const data = [
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:2, FoodID: "1245", CustomerID:"9873",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" },
        { OrderID:1, FoodID: "123rty", CustomerID:"1234",Customer_Name:"zahra",Deliver_Time:"10:56",Price:"115$" }

]
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
            <div className="fixed top-0 left-0">
                <AdminNavbar />
            </div>

            <div className="w-screen flex flex-col justify-center">
        <span className="text-brightColor text-3xl font-semibold text-center lg:pt-8 pt-3 pb-10">
        Orders List</span>
            </div>
            <div className="mt-16">
                <table  className="rounded-[20px] text-black bg-[#8D684D] w-[75rem] h-[600px]">

                   <tr>
                        <th className="border-b-[1px] border-b-black">OrderID</th>
                        <th className="border-b-[1px] border-b-black">FoodID</th>
                        <th className="border-b-[1px] border-b-black">CustomerID</th>
                        <th className="border-b-[1px] border-b-black">Customer_Name</th>
                        <th className="border-b-[1px] border-b-black">Deliver_Time</th>
                        <th className="border-b-[1px] border-b-black">Price</th>
                        <th className=" border-b-[1px] border-b-black ">Confirm</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.OrderID}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.FoodID}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.CustomerID}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.Customer_Name}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.Deliver_Time}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.Price}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">
                                    <FaIcons.FaCheck color="#10D352" className="check , cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"/></td>
                            </tr>
                        )
                    })}
                </table>
            </div>


        </div>
    );
}

export default Orders;