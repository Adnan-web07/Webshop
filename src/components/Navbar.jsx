import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, TreePine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Info', path: '/info' },
        { name: 'Evenemang', path: '/events' },
        { name: 'Reviews', path: '/reviews' },
    ];

    return (
        <nav className="bg-stone-900 text-stone-100 sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95 border-b border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <TreePine className="h-8 w-8 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                        <span className="font-bold text-xl tracking-wider uppercase">Modern Crafts</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-stone-300 hover:text-emerald-400 transition-colors font-medium text-sm uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/cart" className="p-2 hover:bg-stone-800 rounded-full transition-colors relative group">
                            <ShoppingCart className="h-5 w-5 text-stone-300 group-hover:text-emerald-400" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 h-4 w-4 bg-emerald-500 rounded-full text-[10px] flex items-center justify-center font-bold text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-stone-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-stone-900 border-b border-stone-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors flex items-center"
                            >
                                Cart ({cartCount})
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
