import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const events = [
    { id: 1, name: 'Stockholm Design Market', date: 'Dec 10-12, 2023', location: 'Sergels Torg, Stockholm' },
    { id: 2, name: 'Winter Craft Fair', date: 'Jan 15, 2024', location: 'Folkets Park, Malmö' },
    { id: 3, name: 'Spring Makers Expo', date: 'Mar 20, 2024', location: 'Svenska Mässan, Göteborg' },
];

const Events = () => {
    return (
        <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-stone-900 mb-6">Evenemang</h1>
                <p className="text-xl text-stone-600">
                    Meet us in person! Check out where we'll be popping up next.
                </p>
            </motion.div>

            <div className="space-y-6">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-stone-900">{event.name}</h3>
                            <div className="flex items-center text-stone-500 mt-2 space-x-4">
                                <span className="flex items-center text-sm"><Calendar className="h-4 w-4 mr-1" /> {event.date}</span>
                                <span className="flex items-center text-sm"><MapPin className="h-4 w-4 mr-1" /> {event.location}</span>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                            Get Directions
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Events;
