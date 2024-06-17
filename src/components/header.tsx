import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className="bg-black mb-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-white hover:text-gray-200">
                                <span className="font-bold">Poemify</span>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="/" className="py-5 px-3 text-white hover:text-gray-200">Home</a>
                            <a href="https://github.com/Muhammad-Owais-Warsi/Poemify" target="_blank" className="py-5 px-3 text-white hover:text-gray-200">Contact Us</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-5 px-3 text-white">Login</a>
                        <button className="relative p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-3 py-1 bg-black rounded-[6px] relative text-white hover:bg-transparent transition duration-200">
                                Sign Up
                            </div>
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={handleMobileMenuToggle}>
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
                <a href="/" className="block py-2 px-4 text-sm bg-gray-200">Home</a>
                <a href="https://github.com/Muhammad-Owais-Warsi/Poemify" target="_blank" className="block py-2 px-4 text-sm bg-gray-200">Contact Us</a>
            </div>
        </nav>
    );
};
export default Header;
