import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import {links} from '../../Data/NavbarLinks'
import logo from '../../images/Logo.png'
const Header = () => {
   
    let [open, setOpen] = useState(false);
    return (
        <div className=' w-full fixed top-0 left-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 z-50'>
            <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img src={logo} className='h-16 w-16' alt="" />
                    </span>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-9 cursor-pointer md:hidden'>
                    {open ? <GrClose /> : <RxHamburgerMenu />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 bg-gradient-to-r from-pink via-purple-500 to-indigo-500' : 'top-[-490px]'}`}>
                    {
                        links.map((link) => (
                            <li key={link.name} className='md:ml-8  md:my-0 my-7'>
                                <a href={link.link} className='text-white hover:border-b-4 border-black hover:p-3  hover:text-black duration-200'>{link.name}</a>
                            </li>
                        ))
                    }
                    <div>
                        <Link className=' ml-8 text-green-300 text-xl font-[Poppins] py-1 px-6 rounded  hover:bg-indigo-400 duration-500'>Register</Link>
                        <Link className='text-green-300 text-xl font-[Poppins] py-1 px-2 rounded  hover:bg-indigo-400 duration-500'>Login</Link>
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default Header