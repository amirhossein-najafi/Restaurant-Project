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
        Customers List</span>
            </div>
            <div className="mt-16">
                <table  className="rounded-[20px] text-black bg-[#8D684D] w-[10rem] h-[300px] lg:w-[62rem] lg:h-[600px] md:w-[40rem] md:h-[450px]">

                    <tr>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pl-2 border-b-black">CustomerID</th>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pl-2 border-b-black">Customer_Name</th>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pl-2 border-b-black">Phone_number</th>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pl-2 border-b-black">Address</th>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pl-2 border-b-black ">Order_item</th>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pl-2 border-b-black ">Bill</th>
                        <th className="text-[10px] lg:txet-xl border-b-[1px] pr-2 border-b-black ">Modify</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">{val.CustomerID}</td>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">{val.CustomerName}</td>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">{val.PhoneNumber}</td>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">{val.Address}</td>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">{val.OrderItem}</td>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">{val.Bill}</td>
                                <td className="text-[10px] lg:text-xl  lg:pl-14 md:pl-8 pl-8 border-b-[1px] border-b-black">
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