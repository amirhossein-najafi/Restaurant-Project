import React from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";

function Customers() {
    return (
        <div className='bg-black w-screen h-screen'>
            <AdminNavbar/>
            <div className="h-screen w-screen bg-footerColor"></div>

            <h1>Customers</h1>
        </div>
    );
}

export default Customers;