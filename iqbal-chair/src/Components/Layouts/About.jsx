import React from 'react'
import Footer from './Footer'
import Header from './Header'
const About = () => {
    return (
        <>
            <Header />
            <div className='w-full mt-24  md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '>
                <div className='w-full p-3'>
                    <h1 className='text-center text-3xl text-green-300 font-bold p-3'>Meet the Team</h1>
                    <p className='md:w-2/4 m-auto p-5 tracking-wider  text-xl text-white  italic'>
                        Iqbal was deeply concerned with the Youth of that time. He was very much
                         clear to the fact that if Youngsters had focused their real destiny then 
                         they could have led the Muslims of Sub-Continent out of the danger of destruction 
                         earlier than they did.Iqbal was deeply concerned with the Youth of that time. 
                         He was very much clear to the fact that if Youngsters had focused their real 
                         destiny then they could have led the Muslims
                         of Sub-Continent out of the danger of destruction earlier than they did.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About