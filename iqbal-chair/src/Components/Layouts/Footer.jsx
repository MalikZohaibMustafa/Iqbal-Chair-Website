import React, { useState, useEffect } from 'react'
import logo from '../../images/Logo.png'
import { FooterContents } from '../../Data/NavbarLinks'
import { Link } from 'react-router-dom'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
const Footer = () => {
    const [year, setYear] = useState('')
    let date = new Date();
    useEffect(() => {
        setYear(date.getFullYear())
    }, [setYear])

 
    return (
        <div className=' w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-full p-1 '>
            <div className='w-full bg-white md:flex mt-3 '>
                {/*  */}
                <div className='w-2/6 '>
                    <h1 className='ml-20 text-3xl font-bold p-2 '>Contents</h1>
                    {
                        FooterContents.map((content) => (
                            <div className='ml-20 text-base p-0.5  ' key={content.name}>
                                <Link to={content.link}>{content.name}</Link>
                            </div>
                        ))
                    }
                </div>
                {/*  */}
                <div className='md:w-2/6  '>
                    <div className='w-full p-5  '>
                        <img src={logo} alt="" className='h-48 m-auto' />
                    </div>
                    <h1 className='uppercase text-4xl font-bold p-4 md:text-center'>Iqbal chair</h1>
                    <h1 className=' text-xl  p-1 text-center'>support@iqbalchair.com</h1>
                </div>
                {/*  */}
                <div className='w-2/6  '>
                    <h1 className='text-center text-3xl font-bold p-2 '>Social</h1>
                    <div className='ml-40 text-xl  p-4 flex flex-col ' >
                        <a className='text-blue-500 text-4xl mb-8 ' href='https://www.facebook.com/'><BsFacebook /></a>
                        <a className='text-red-600 text-4xl mb-8 ' href='https://www.instagram.com/'><BsInstagram /></a>
                        <a className='text-blue-500 text-4xl' href='https://www.twitter.com/'><BsTwitter /></a>
                    </div>
                </div>
            </div>
            <div className='w-full p-4'>
                <h1 className='text-center text-white text-xl'>Copyright ©{year} Powered By Iqbal Chair</h1>
            </div>

        </div>
    )
}

export default Footer