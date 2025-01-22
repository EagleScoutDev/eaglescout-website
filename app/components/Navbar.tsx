'use client';
import Link from 'next/link';
import Image from 'next/image';
import AppIcon from '@/app/assets/app_icon.webp';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const navItems = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Docs' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact Us' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <Image src={AppIcon} alt="EagleScout App Icon" width={50} height={50}/>
                </Link>
                <div className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white transition">
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/get-started" className="text-gray-300 hover:text-white transition">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Download
                        </button>
                    </Link>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-900 border-zinc-800">
                        <nav className="flex flex-col space-y-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white transition text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/get-started"
                                className="text-gray-300 hover:text-white transition text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Download
                                </button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};
