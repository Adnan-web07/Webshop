import React from 'react';
import { motion } from 'framer-motion';
import { TreeDeciduous, Box } from 'lucide-react';

const Info = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-stone-900 mb-6">Our Craft & Story</h1>
                <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                    We believe in the harmony of nature and innovation. Every piece tells a story of sustainable materials and precision engineering.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-stone-100 p-8 rounded-2xl"
                >
                    <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mb-6">
                        <TreeDeciduous className="text-white h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Natural Wood</h2>
                    <p className="text-stone-600 leading-relaxed">
                        We source high-quality, sustainable timber. From rich Walnut to sturdy Oak, our wood selection is curated for durability and aesthetics. Each grain pattern is unique, ensuring no two products are exactly alike.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-stone-100 p-8 rounded-2xl"
                >
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                        <Box className="text-white h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">3D Printing</h2>
                    <p className="text-stone-600 leading-relaxed">
                        Using advanced PLA materials (biodegradable plastic derived from corn starch), we create complex geometries impossible to achieve with traditional tools. This allows for lightweight, strong, and intricate designs.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Info;
