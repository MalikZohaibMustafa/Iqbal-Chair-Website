import React from 'react'
import Header from './Header'
import iqbalhome from '../../images/iqbalhome.png'
import HomeEvents from '../Events/HomeEvents'
import Footer from './Footer'
const Home = () => {
    return (
        <>
            <Header />

            <div className='w-full mt-24 md:flex static flex flex-col-reverse md:flex-row bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '>
                <div className='md:mt-20 md:w-3/5   w-full  ' >
                    <h1 className='text-center text-green-400 text-xl font-bold uppercase'>Allama Iqbal</h1>
                    <p className=' md:ml-4 md:leading-7 md:p-8 p-3 w-full text-white  '>Allama Iqbal was a philosopher, poet
                        who is widely regarded as one of the
                        most important figures in South Asian
                        history. He had many messages
                        throughout his life, but one of his most
                        famous messages was the idea of
                        self-realization and self-empowerment
                        for Muslims. He believed that Muslims
                        should not simply accept their current
                        circumstances, but rather should strive
                        to improve themselves and their situation.
                        In his poetry, Iqbal often wrote about the
                        importance of individualism, self-reflection,
                        and action. He encouraged Muslims to take
                        control of their own destiny, rather than
                        waiting for outside forces to change their
                        situation.

                    </p>
                </div>
                <div className=' md:mt-20 md:w-2/5 w-full mt-16 '>
                    <div className='w-full '>
                        <img src={iqbalhome} className='md:h-96 md:w-full  ' alt="" />
                    </div>
                </div>
            </div>
            <HomeEvents />
            <div className=' w-full flex flex-col items-center justify-center p-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
                <h1 className='text-green-400 text-3xl font-bold p-2 '>افراد کے ہاتھوں ميں ہے اقوام کي تقدير</h1>
                <h1 className='text-green-400 text-3xl font-bold p-2' >ہر فرد ہے ملت کے مقدر کا ستارا</h1>
            </div>
           
            <Footer />
        </>
    )
}

export default Home