import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    { id: 1, name: 'Anna S.', rating: 5, text: 'Absolutely love my new phone stand. The wood finish is incredible!' },
    { id: 2, name: 'Johan K.', rating: 5, text: 'Fast shipping and the 3D printed vase looks even better in person.' },
    { id: 3, name: 'Maria L.', rating: 4, text: 'Great quality products. Will definitely buy again.' },
];

const Reviews = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-stone-900 mb-6">Customer Reviews</h1>
                <p className="text-xl text-stone-600">
                    See what our customers are saying about Modern Crafts.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
                    >
                        <div className="flex space-x-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-stone-300'}`}
                                />
                            ))}
                        </div>
                        <p className="text-stone-600 mb-6 italic">"{review.text}"</p>
                        <div className="font-bold text-stone-900">- {review.name}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
