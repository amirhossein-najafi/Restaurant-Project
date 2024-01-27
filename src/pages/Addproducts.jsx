import React, {useState} from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";

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
            <div className="bg-black min-h-screen flex flex-col  justify-center items-center sm:px-32 px-5 py-20">
                <div className="fixed top-0 left-0">
                    <AdminNavbar/>
                </div>
                <div className="lg:w-[45rem] lg:h-[50rem] md:w-[35rem] md:h-[40rem]  w-[20rem] h-[60rem] bg-[#8D684D] min-h-screen   rounded-[20px] pl-24 pt-12 pb-24 pr-24">
                    <div className="flex flex-row justify-center sm:text-md  hover:text-brightColor font-extrabold">
                        ADD PRODUCT FORM
                    </div>
                    <div className="mt-12">
                        <span className="font-bold">Product Name</span><br/>
                        <input className="text-center outline-none mt-2 lg:w-96 md:w-60 w-52 h-10 rounded-[10px]" type="text" placeholder="Food Name"/>
                    </div>
                    <div className="mt-12 flex flex-row justify-start lg:gap-44 md:gap-24 gap-14">
                        <div ><span className="font-bold">Category:</span><br/>
                            <select  onChange={(e) => {handleChange(e)}} className="lg:w-52 md:w-36 w-20 mt-2 h-10 rounded-[10px] pl-3">
                                {options.map((option) => (
                                    <option value={option.value} className="" >{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <span className="font-bold">price:</span>
                            <input className="p-2 outline-none mt-2 lg:w-52 md:w-44 w-20 h-10 rounded-[10px]" type="number" placeholder="Price"/>
                        </div>
                    </div>
                    <div className="mt-12">
                        <span className="font-bold">Description:</span><br/>
                        <input className="outline-none  lg:w-10/12 md:w-96 lg:h-28 md:h-16 h-16 w-52 rounded-[10px]" type="text" placeholder="Write details of food or anything else taht is important..."/>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row justify-start md:gap-32">
                        <div>
                            <span className="font-bold">Image:</span><br/>
                            <input className="bg-amber-50 outline-none md:w-36 lg:w-64 w-44     rounded-[10px]" type="file" multiple accept="image/*" onChange={handleChange1}/>
                        </div>
                        <div>
                            <img className="mt-4 "   src={file}  alt=""/>

                        </div>
                    </div>
                    <div className="lg:w-[37rem] md:w-[25rem] w-[19rem] flex justify-end gap-5 lg:mt-12 md:mt-36 mt-[4rem] ">
                        <button className="px-8 py-1 border-2  bg-brightColor border-brightColor text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ">Save</button>
                        <button className="px-8 py-1 border-2  bg-brightColor border-brightColor text-black  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  ">Save and Add</button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Addproducts;