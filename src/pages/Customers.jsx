import React from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";
import * as  HiPencil from "react-icons/hi2";
import * as FaTrashAlt  from "react-icons/fa";

function Customers() {
    const data = [
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" },
        { CustomerID:1, CustomerName: "zahra", PhoneNumber:"09387907674",Address:"Amol",OrderItem:"pizza",Bill:"115$" }
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
                                <td className="pl-14 border-b-[1px] border-b-black">{val.CustomerID}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.CustomerName}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.PhoneNumber}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.Address}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.OrderItem}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">{val.Bill}</td>
                                <td className="pl-14 border-b-[1px] border-b-black">
                                    <HiPencil.HiPencil color="#000000" className="check , cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"/>
                                    <FaTrashAlt.FaTrashAlt color="#000000" className="check , cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"/></td>
                            </tr>
                        )
                    })}
                </table>
            </div>


        </div>
    );
}

export default Customers;