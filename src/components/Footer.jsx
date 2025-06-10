import React from 'react'

const Footer = () => {
    return (
        <div className="container bg-[#06202B] border-2 border-black md:rounded-b-2xl md:mx-auto md:w-1/2">
            <div className=" text-white font-bold">
                <div className='flex items-center justify-center h-20'>
                    <div className='lg:px-16 md:px-13 px-4 sm:px-7 cursor-pointer drop-shadow-xl hover:text-black hover:drop-shadow-cyan-500/50 py-2 hover:bg-cyan-500 z-10 rounded-3xl'>Today</div>
                    <div className='lg:px-16 md:px-13 px-4 sm:px-7 cursor-pointer py-2 drop-shadow-xl hover:text-black  hover:drop-shadow-cyan-500/50 hover:bg-cyan-500 z-10 rounded-3xl'>Pending</div>
                    <div className='lg:px-16 md:px-13 px-4 sm:px-7 cursor-pointer py-2 drop-shadow-xl hover:text-black  hover:drop-shadow-cyan-500/50 hover:bg-cyan-500 z-10 rounded-3xl'>Overdue</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
