import React from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";
import img1 from "../assets/img/banner-1.jpg";
import Button from "../layouts/Button.jsx";

function Edit() {
    const data = [
        { ProductID: "1034", Name: "Chicken burger",Details:"chicken 70%,bread,cheese,...",category:"Food" },
        { ProductID: "5634", Name: "Chicken burger",Details:"chicken 70%,bread,cheese,...",category:"Food" },
        { ProductID: "1834", Name: "Chicken burger",Details:"chicken 70%,bread,cheese,...",category:"Food" },
        { ProductID: "1434", Name: "ceaser salad",Details:"chicken 70%,bread,cheese,...",category:"Salad" },
        { ProductID: "1134", Name: "ceaser salad",Details:"chicken 70%,bread,cheese,...",category:"Salad" },
    ]
    return (
        <div>
            <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
                <div className="fixed top-0 left-0">
                    <AdminNavbar/>
                </div>
                <div className="mt-0 pt-0">
                    <img src={img1} height="150" alt=""/>
                </div>
                <div className="mt-16">
                    <table className="rounded-[20px] text-black bg-[#8D684D]  w-[60rem] h-[15rem]">
                        <tr>
                            <th className=" border-b-[1px] border-b-black">ProductID</th>
                            <th className="border-b-[1px] border-b-black">Name</th>
                            <th className="border-b-[1px] border-b-black">Details</th>
                            <th className="border-b-[1px] border-b-black">category</th>
                            <th className="border-b-[1px] border-b-black"></th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.ProductID}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.Name}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.Details}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">{val.category}</td>
                                    <td className="pl-4 border-b-[1px] border-b-black">
                                        <input    type="checkbox" value=""
                                                  className="border-footerColor accent-black  w-4 h-4 cursor-pointer rounded-[5px] "/>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div className=" w-[55rem] flex justify-end gap-5 mt-4">
                    <Button  title="edit"/>
                    <Button  title="delete"/>
                </div>




            </div>
        </div>

    );
}

export default Edit;