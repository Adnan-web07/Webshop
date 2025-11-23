import React from 'react';
import { Instagram, Mail } from 'lucide-react';

// Custom TikTok icon since Lucide might not have it or it might be different
const TikTokIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider">Modern Crafts</h3>
                        <p className="text-sm leading-relaxed">
                            Handcrafted wooden treasures and precision 3D printed innovations. Bringing nature and technology together.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider">Contact</h3>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 text-emerald-500" />
                            <a href="mailto:kontakt.moderncrafts@gmail.com" className="hover:text-emerald-400 transition-colors">
                                kontakt.moderncrafts@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-pink-500 transition-all group">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-black hover:bg-white transition-all group">
                                <TikTokIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Modern Crafts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
