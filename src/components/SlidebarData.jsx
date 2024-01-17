import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";
import * as ioicons from "react-icons/io5";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdIcons.MdDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'EditMenu',
        path: '/editmenu',
        icon: <MdIcons.MdModeEdit/>,
        cName: 'nav-text'
    },
    {
        title: 'AddProducts',
        path: '/AddProducts',
        icon: <ioicons.IoAddCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <MdIcons.MdOutlineFastfood />,
        cName: 'nav-text'
    },
    {
        title: 'Customers',
        path: '/customers',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
];