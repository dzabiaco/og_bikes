"use client";
import Link from "next/link";
import {useState} from "react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo aligned to the left */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-white font-bold text-xl">
                                <img src="../../../static/images/logo-inverse-416x78.png" alt=""/>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu aligned to the right */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="/">
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </span>
                            </Link>
                            <Link href="/about">
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </span>
                            </Link>
                            <Link href="/shop">
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Shop
                                </span>
                            </Link>
                            <Link href="/contact">
                                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/">
                        <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            About
                        </span>
                    </Link>
                    <Link href="/shop">
                        <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Shop
                        </span>
                    </Link>
                    <Link href="/contact">
                        <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}