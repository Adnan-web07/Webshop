import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Mock data - in a real app this would come from an API or database
const products = [
    { id: 1, name: 'Oak Desk Organizer', price: 450, category: 'Wood', image: 'https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?auto=format&fit=crop&q=80&w=1000', description: 'Keep your workspace tidy with this handcrafted oak organizer. Features multiple compartments for pens, phone, and notes.' },
    { id: 2, name: 'Geometric Planter', price: 250, category: '3D Print', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1000', description: 'A modern, geometric planter 3D printed with biodegradable PLA. Perfect for succulents and small indoor plants.' },
    { id: 3, name: 'Walnut Phone Stand', price: 300, category: 'Wood', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000', description: 'Elegant walnut phone stand compatible with all major smartphones. Provides the perfect viewing angle for video calls.' },
    { id: 4, name: 'Voronoi Vase', price: 350, category: '3D Print', image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=1000', description: 'Intricate Voronoi pattern vase that plays with light and shadow. A stunning centerpiece for any room.' },
];

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-stone-500 hover:text-stone-900 mb-8 transition-colors"
            >
                <ArrowLeft className="h-5 w-5 mr-2" /> Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="rounded-2xl overflow-hidden bg-white shadow-lg"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">{product.category}</span>
                        <h1 className="text-4xl font-bold text-stone-900 mt-2 mb-4">{product.name}</h1>
                        <p className="text-3xl font-bold text-stone-900">{product.price} KR</p>
                    </div>

                    <p className="text-stone-600 text-lg leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <ShoppingBag className="h-6 w-6" /> Add to Cart
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-stone-200">
                        <div className="flex items-center text-stone-600">
                            <Truck className="h-5 w-5 mr-3 text-emerald-600" />
                            <span className="text-sm">Fast Shipping within Sweden</span>
                        </div>
                        <div className="flex items-center text-stone-600">
                            <ShieldCheck className="h-5 w-5 mr-3 text-emerald-600" />
                            <span className="text-sm">Quality Guarantee</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetails;
