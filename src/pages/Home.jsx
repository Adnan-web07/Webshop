import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Oak Desk Organizer', price: 450, category: 'Wood', image: 'https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, name: 'Geometric Planter', price: 250, category: '3D Print', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, name: 'Walnut Phone Stand', price: 300, category: 'Wood', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, name: 'Voronoi Vase', price: 350, category: '3D Print', image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=1000' },
];

const Home = () => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-stone-900">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=2000"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Crafting the <span className="text-emerald-500">Future</span> from <span className="text-amber-700">Nature</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto"
                    >
                        Unique products blending traditional woodworking with modern 3D printing technology.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20 flex items-center mx-auto gap-2"
                    >
                        Shop Now <ArrowRight className="h-5 w-5" />
                    </motion.button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-stone-900 mb-4">Featured Collection</h2>
                    <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-stone-800">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-emerald-600 font-bold text-xl">{product.price} KR</span>
                                        <button className="p-2 bg-stone-100 rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
                                            <ShoppingBag className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
