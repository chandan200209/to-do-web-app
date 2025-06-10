import React from 'react';
import notificationsIcon from '../assets/notification.svg';
import userIcon from '../assets/user01.svg';
import userIcon2 from '../assets/user02.svg';

const Navbar = () => {
    return (
        <nav className="container md:mx-auto md:w-1/2 flex bg-[#06202B] border-2 border-black text-white justify-between items-center px-4 py-2 md:rounded-t-2xl">
            <div className="logo font-bold text-2xl italic cursor-pointer text-[#F5EEDD]">iTask</div>
            <ul className="flex gap-6 font-beg">
                <li className="w-10 hover:underline cursor-pointer">Home</li>
                <li className="w-10 hover:underline cursor-pointer">Tasks</li>
                <div className="flex"><li className=" w-10"><img className="cursor-pointer invert" src={notificationsIcon}></img></li>
                    <li className=" w-10"><img className="cursor-pointer invert" src={userIcon}></img></li></div>
            </ul>
        </nav>
    )
};

export default Navbar;
