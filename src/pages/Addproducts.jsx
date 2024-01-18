import React, {useState} from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";
import img1 from "../assets/img/banner-1.jpg";
import Button from "../layouts/Button.jsx";

function Addproducts() {
    const options = [
        {
            label: "Food",
            value: 2
        },
        {
            label: "Salad",
            value: 3
        },
        {
            label: "Coffee",
            value: 4
        }
    ];
    const [file, setFile] = useState();
    function handleChange1(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className="add">
            <div className="bg-black min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-20">
                <div className="fixed top-0 left-0">
                    <AdminNavbar/>
                </div>
                <div className="w-[45rem] h-[50rem] bg-[#8D684D] min-h-screen   rounded-[20px] pl-24 pt-12 pb-24 pr-24">
                    <div className="flex flex-row justify-center  hover:text-brightColor font-extrabold">
                        ADD PRODUCT FORM
                    </div>
                    <div className="mt-12">
                        <span className="font-bold">Product Name</span><br/>
                        <input className="text-center outline-none mt-2 w-96 h-10 rounded-[10px]" type="text" placeholder="Food Name"/>
                    </div>
                    <div className="mt-12 flex flex-row justify-start gap-44">
                        <div ><span className="font-bold">Category:</span><br/>
                            <select  onChange={(e) => {handleChange(e)}} className="w-52 mt-2 h-10 rounded-[10px] pl-3">
                                {options.map((option) => (
                                    <option value={option.value} className="" >{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <span className="font-bold">price:</span>
                            <input className="p-2 outline-none mt-2 w-52 h-10 rounded-[10px]" type="number" placeholder="Price"/>
                        </div>
                    </div>
                    <div className="mt-12">
                        <span className="font-bold">Description:</span><br/>
                        <input className="outline-none  w-10/12 h-28 rounded-[10px]" type="text" placeholder="Write details of food or anything else taht is important..."/>
                    </div>

                    <div className="mt-12 flex flex-row justify-start gap-32">
                        <div>
                            <span className="font-bold">Image:</span><br/>
                            <input className="bg-amber-50 outline-none   rounded-[10px]" type="file" multiple accept="image/*" onChange={handleChange1}/>

                        </div>
                        <div>
                            <img className="mt-4" width="150px" height="150px"   src={file}  alt=""/>

                        </div>
                    </div>
                    <div className="w-[35rem] flex justify-end gap-5 mt-12">
                        <button className="px-8 py-1 border-2  bg-brightColor border-brightColor text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ">Save</button>
                        <button className="px-8 py-1 border-2  bg-brightColor border-brightColor text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ">Save and Add</button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Addproducts;