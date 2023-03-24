import React, { useState } from 'react';
import Header from './Header';
import { faqs } from '../../Data/NavbarLinks';
import {IoIosArrowDown,IoIosArrowBack} from 'react-icons/io';
import Footer from './Footer';
const QuestionForm = () => {
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add code to handle form submission, like sending an email with the question
        console.log(`Email: ${email}, Question: ${question}`);
        setEmail('');
        setQuestion('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="p-8 w-full">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ask a Question</div>
                    <div className="mt-2">
                        <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required className="w-full border-gray-300 rounded-md shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-2" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="question" className="block text-gray-600 font-medium">Question</label>
                        <textarea id="question" name="question" value={question} onChange={handleQuestionChange} required rows="4" className="w-full border-gray-300 rounded-md shadow-sm mt-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm resize-none border-2"></textarea>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};



const FaqList = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };


    return (
       <>
       <Header />
       <div className='mt-24 p-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
        <h1 className='text-center text-3xl text-green-300 font-bold p-3'>Frequently Asked Question About Iqbal Chair</h1>
       <div className="max-w-md mx-auto ">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <button
                        className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-md focus:outline-none"
                        onClick={() => handleExpand(index)}
                    >
                        <h2 className="text-lg font-medium">{faq.question}</h2>
                        <span className="transform transition-transform duration-300 ease-in-out">
                            {expandedIndex === index ? (
                                 
                              
                                <IoIosArrowBack />
                            ) : (
                                 <IoIosArrowDown />

                            )}
                        </span>
                    </button>
                    {expandedIndex === index && (
                        <div className="px-4 py-2 bg-gray-200 rounded-b-md w-full">
                            <p className='mt-2 rounded'>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
        <QuestionForm />
       </div>
        <Footer />
 
       
       </>
    );
};

export default FaqList;
