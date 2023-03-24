import React, { useState } from 'react'
import Header from '../Layouts/Header'
import { events } from '../../Data/NavbarLinks';
import Footer from '../Layouts/Footer';
const EventCard = ({ event }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src={event.image} alt={event.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.name}</div>
                <p className="text-gray-700 text-base">{event.date}</p>
            </div>
            <div className="px-6 pb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Explore
                </button>
            </div>
        </div>
    );
};
const EventList = ({ events }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {events.map((event) => (
                <>
                    <EventCard key={event.id} event={event} /></>
            ))}
        </div>
    );
};
const AllEvents = () => {
    const [currentEvents, setCurrentEvents] = useState(events);
    const [isPreviousActive, setIsPreviousActive] = useState(false);
    const [isAllActive, setIsAllActive] = useState(false);
    const [iscurrentActive, setIscurrentActive] = useState(false);
    const [isupcomingActive, setIsupcomingActive] = useState(false);
    const handleShowAll = () => {
        setCurrentEvents(events);
        setIsAllActive(true);
        setIscurrentActive(false);
        setIsPreviousActive(false);
        setIsupcomingActive(false);
    };

    const handleShowUpcoming = () => {
        const upcomingEvents = events.filter(
            (event) => event.type === "upcoming"
        );
        setCurrentEvents(upcomingEvents)
        setIsupcomingActive(true)
        setIsAllActive(false);
        setIsPreviousActive(false);
        setIscurrentActive(false);
        
    };

    const handleShowCurrent = () => {
        const previousEvents = events.filter(
            (event) => event.type === "current"
        );
        setCurrentEvents(previousEvents)
        setIscurrentActive(true)
        setIsAllActive(false);
        setIsPreviousActive(false);
        setIsupcomingActive(false);
    };
    const handleShowPrevious = () => {
        const previousEvents = events.filter(
            (event) => event.type === "previous"
        );
        setCurrentEvents(previousEvents)
        setIsPreviousActive(true)
        setIsAllActive(false);
        setIsupcomingActive(false);
        setIscurrentActive(false);
    };

    return (
        <>
            <Header />
            <div className='mt-24 p-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-full'>

                <div className="container mx-auto ">
                    <h1 className="text-3xl font-bold mt-8 mb-4">All Events</h1>
                    <div className="flex justify-center mb-4">
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${isAllActive ? "bg-slate-50 text-black" : ""
                                }`} onClick={handleShowAll}
                        >
                            All Event
                        </button>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${iscurrentActive ? "bg-slate-50 text-black" : ""
                                }`}
                            onClick={handleShowCurrent}
                        >
                            Current Event
                        </button>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2
                             ${isupcomingActive ? "bg-slate-50 text-black " : ""
                                }`}
                            onClick={handleShowUpcoming}
                        >
                            Upcoming Event
                        </button>
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${isPreviousActive ? "bg-slate-50 text-black" : ""
                                }`} onClick={handleShowPrevious}
                        >
                            Previous Event
                        </button>
                    </div>

                    <EventList events={currentEvents} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllEvents