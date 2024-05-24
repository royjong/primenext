"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full py-5 bg-white shadow-md">
            <div className="container w-[85%] mx-auto flex justify-between items-center">
                <div>
                    <Image src="/logo.png" width={250} height={250} className="w-[100px]" alt="Prime Next" />
                </div>
                <div className="hidden md:flex gap-5 items-center">
                    <Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link>
                    <Link href="/" className="text-gray-800 hover:text-blue-500">About</Link>
                    <Link href="/" className="text-gray-800 hover:text-blue-500">Services</Link>
                    <Button>Zoek een verzekering</Button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg mt-2">
                    <div className="flex flex-col items-center gap-3 py-5">
                        <Link href="/" className="text-gray-800 hover:text-blue-500" onClick={toggleMenu}>Home</Link>
                        <Link href="/" className="text-gray-800 hover:text-blue-500" onClick={toggleMenu}>About</Link>
                        <Link href="/" className="text-gray-800 hover:text-blue-500" onClick={toggleMenu}>Services</Link>
                        <Button onClick={toggleMenu}>Zoek een verzekering</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
