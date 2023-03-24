import React from 'react'
import Header from './Header'
import contactImage from '../../images/contactPage.png'
import Footer from './Footer'
const Contact = () => {
    return (
        <>
            <Header />
            <div className='w-full mt-24  md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '>
                <div className='w-full p-3'>
                    <h1 className='text-center text-3xl text-green-300 font-bold p-3 uppercase'>Contact us</h1>
                    <p className='md:w-2/4 m-auto p-5 tracking-wider  text-xl text-white text-center italic'>
                        Your feedback matters to us
                    </p>
                </div>
                <div className='w-full md:flex sm:flex'>
                    <div className='sm:w-2/4  md:w-2/4 md:flex sm:flex md:justify-center md:items-center md:flex-col'>
                        <div className='mt-12'>
                            <img src={contactImage} alt="" className='h-72' />
                        </div>
                        <div className='w-full p-7  '>
                            <p className='text-center text-white p-12 lg:ml-20 md:h-52 md:w-96 bg-indigo-900 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full'>Address: Iqbal Chair,
                                Bahria University, E-8 Campus,
                                Shangrilla Road, Sector E-8, Islamabad.
                                Phone: +92-51-9260002 Ext: 1549
                                UAN: +92-51-111-111-028.
                                Fax: 92-51-9260885</p>
                        </div>
                    </div>
                    <div
                        className=' sm:w-2/4 '>
                        <form className='md:w-3/4 mt-12  rounded m-auto p-4 bg-[#57a4ff] '>
                            <div className='flex flex-col p-2'>
                                <p className='text-center text-green-400 text-2xl pb-2 font-bold'> <label htmlFor="">Name</label></p>
                                <input type="text" className='lg:w-72 sm:w-64 m-auto p-1 rounded' />
                            </div>
                            <div className='flex flex-col p-2 mt-3'>
                                <p className='text-center text-green-400 text-2xl pb-2 font-bold'> <label htmlFor="">Email</label></p>
                                <input type="email" className='lg:w-72 sm:w-64 m-auto p-1 rounded ' required />
                            </div>
                            <div className='flex flex-col p-2'>
                                <p className='text-center text-green-400 text-2xl pb-2 font-bold'> <label htmlFor="">Message</label></p>
                                <textarea type="text" className='md:w-64 w-64 m-auto resize-none rounded '  rows={10} />
                            </div>
                            <button className='bg-purple-700 text-white font-bold p-1 w-24 ml-44 mt-4'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact