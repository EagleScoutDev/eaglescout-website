import Link from 'next/link';
import Image from 'next/image';
import AppIcon from '@/app/assets/app_icon.webp';

export const Navbar = () => {
    return (
        <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    <Image src={AppIcon} alt="EagleScout App Icon" width={50} height={50}/>
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-300 hover:text-white transition">
                        Home
                    </Link>
                    <Link href="/docs" className="text-gray-300 hover:text-white transition">
                        Docs
                    </Link>
                    <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};
