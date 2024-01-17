import React from 'react';
import AdminNavbar from "../components/AdminNavbar.jsx";

function Orders() {
    return (
        <div className="h-screen w-screen bg-amber-500">
            <AdminNavbar/>

            <h1 className="fixed  text-black">Orders</h1>
        </div>
    );
}

export default Orders;