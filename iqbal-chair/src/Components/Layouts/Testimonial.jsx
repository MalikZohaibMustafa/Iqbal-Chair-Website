import React from "react";
import Header from "./Header";
import { testimonials } from "../..//Data/NavbarLinks"
import Footer from "./Footer";
const Testimonial = ({ quote, author, company, image }) => {
    return (
        <>
            <Header />
            <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                <div class="w-full max-w-6xl mx-auto">
                    <div class="text-center max-w-xl mx-auto">
                        <h1 class="text-6xl md:text-7xl font-bold mb-5 text-green-400">What people <br />are saying.</h1>
                        <h3 class="text-xl mb-5 font-bold text-white"> About Iqbal Chair </h3>
                        {/* <div class="text-center mb-10">
                            <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        </div> */}
                    </div>

                    <div class="-mx-3 md:flex items-center justify-center gap-6 md:flex-wrap">
                        {
                            testimonials.map((testimonial, index) => {
                                return (
                                    <>
                                        <div class="px-3 md:w-2/5" key={index}>
                                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div class="w-full flex mb-4 items-center">

                                                    <div class="flex-grow pl-3">
                                                        <h6 class="font-bold text-sm uppercase text-gray-600">{testimonial.name} </h6>
                                                    </div>
                                                </div>
                                                <div class="w-full">
                                                    <p class="text-sm leading-tight">
                                                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> {testimonial.description}  <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>


                </div>
            </div>

                        <Footer />
        </>    );
};

export default Testimonial;
