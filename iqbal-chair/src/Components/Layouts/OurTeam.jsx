import React from 'react'
import Header from './Header'
import team from '../../images/Team.jpg'
import Footer from './Footer';
const OurTeam = () => {
    
    return (
        <>
            <Header />
            <div className='w-full mt-24  md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '>

                <div className='w-full '>
                    <h1 className='text-center text-3xl text-green-300 font-bold p-3'>Meet the Team</h1>
                    <p className='md:w-2/4 m-auto p-5 tracking-wider  text-xl text-white  italic'>We believe that a great team is the foundation of a successful business. That's why we're proud to introduce you to our talented and driven group of individuals.</p>
                </div>
                <div className='w-full  mt-5 p-5 md:flex sm:flex sm:flex-wrap gap-6 md:flex-wrap md:justify-center'>
                    <div className='w-80 border '>
                        <div className='w-full  p-2 '>
                            <img src={team} alt="" className='h-72  w-full rounded-full' />
                        </div>
                        <h1 className='text-xl text-green-400 text-center p-2'>Name</h1>
                        <h1 className='text-xl text-green-400 text-center p-1'>Role</h1>
                    </div>
                    <div className='w-80 border '>
                        <div className='w-full  p-2 '>
                            <img src={team} alt="" className='h-72  w-full rounded-full' />
                        </div>
                        <h1 className='text-xl text-green-400 text-center p-2'>Name</h1>
                        <h1 className='text-xl text-green-400 text-center p-1'>Role</h1>
                    </div>
                   
                    <div className='w-80 border'>
                        <div className='w-full  p-2 '>
                            <img src={team} alt="" className='h-72  w-full rounded-full' />
                        </div>
                        <h1 className='text-xl text-green-400 text-center p-2'>Name</h1>
                        <h1 className='text-xl text-green-400 text-center p-1'>Role</h1>
                    </div>
                    <div className='w-80 border'>
                        <div className='w-full  p-2 '>
                            <img src={team} alt="" className='h-72  w-full rounded-full' />
                        </div>
                        <h1 className='text-xl text-green-400 text-center p-2'>Name</h1>
                        <h1 className='text-xl text-green-400 text-center p-1'>Role</h1>
                    </div>
                    <div className='w-80 border'>
                        <div className='w-full  p-2 '>
                            <img src={team} alt="" className='h-72  w-full rounded-full' />
                        </div>
                        <h1 className='text-xl text-green-400 text-center p-2'>Name</h1>
                        <h1 className='text-xl text-green-400 text-center p-1'>Role</h1>
                    </div>
                    <div className='w-80 border'>
                        <div className='w-full  p-2 '>
                            <img src={team} alt="" className='h-72  w-full rounded-full' />
                        </div>
                        <h1 className='text-xl text-green-400 text-center p-2'>Name</h1>
                        <h1 className='text-xl text-green-400 text-center p-1'>Role</h1>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default OurTeam