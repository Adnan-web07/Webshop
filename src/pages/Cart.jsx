import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState('');

    const handleApplyCoupon = () => {
        if (couponCode.toUpperCase() === 'CRAFT10') {
            setDiscount(0.1); // 10% discount
            setCouponMessage('Coupon applied successfully! (10% off)');
        } else {
            setDiscount(0);
            setCouponMessage('Invalid coupon code.');
        }
    };

    const finalTotal = cartTotal * (1 - discount);

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Your cart is empty</h2>
                <p className="text-stone-500 mb-8">Looks like you haven't added anything yet.</p>
                <Link
                    to="/"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-500 transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-stone-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center bg-white p-6 rounded-xl shadow-sm border border-stone-100"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="ml-6 flex-grow">
                                <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
                                <p className="text-stone-500">{item.category}</p>
                                <div className="mt-2 font-bold text-emerald-600">{item.price} KR</div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center bg-stone-100 rounded-lg">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="p-2 hover:text-emerald-600 transition-colors"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-2 hover:text-emerald-600 transition-colors"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-stone-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
                        <h2 className="text-xl font-bold text-stone-900 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-stone-600">
                                <span>Subtotal</span>
                                <span>{cartTotal.toFixed(2)} KR</span>
                            </div>
                            {discount > 0 && (
                                <div className="flex justify-between text-emerald-600 font-medium">
                                    <span>Discount</span>
                                    <span>-{(cartTotal * discount).toFixed(2)} KR</span>
                                </div>
                            )}
                            <div className="pt-4 border-t border-stone-200 flex justify-between text-xl font-bold text-stone-900">
                                <span>Total</span>
                                <span>{finalTotal.toFixed(2)} KR</span>
                            </div>
                        </div>

                        {/* Coupon Code */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-stone-700 mb-2">Coupon Code</label>
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Try CRAFT10"
                                    className="flex-grow px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <button
                                    onClick={handleApplyCoupon}
                                    className="px-4 py-2 bg-stone-200 text-stone-700 rounded-lg font-medium hover:bg-stone-300 transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                            {couponMessage && (
                                <p className={`text-sm mt-2 ${discount > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                                    {couponMessage}
                                </p>
                            )}
                        </div>

                        <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-lg">
                            Checkout <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
