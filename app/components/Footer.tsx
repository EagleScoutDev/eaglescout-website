import Link from 'next/link';
import Image from 'next/image';
import {Instagram, Github} from 'lucide-react';
import DiscordIcon from '@/app/assets/discord_icon.svg';
import AppIcon from '@/app/assets/app_icon.webp';

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
                    <div className="col-span-2 md:col-span-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src={AppIcon} alt="EagleScout App Icon" width={50} height={50}/>
                            <span className="text-xl font-bold">EagleScout</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            SLOGAN HERE SLOGAN HERE SLOGAN HERE LMAO.
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-gray-400 hover:text-white transition">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#support" className="text-gray-400 hover:text-white transition">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-semibold mb-4">Project</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#releases" className="text-gray-400 hover:text-white transition">
                                    Releases
                                </Link>
                            </li>
                            <li>
                                <Link href="#changelog" className="text-gray-400 hover:text-white transition">
                                    Changelog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-2">
                        <h3 className="font-semibold mb-4">Community</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#discord"
                                      className="text-gray-400 hover:text-white transition flex items-center gap-2">
                                    <Image src={DiscordIcon} alt="Discord Icon" width={20} height={20}/>
                                    Join Discord
                                </Link>
                            </li>
                            <li>
                                <Link href="#instagram"
                                      className="text-gray-400 hover:text-white transition flex items-center gap-2">
                                    <Instagram className="w-4 h-4"/>
                                    Follow on Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="#github"
                                      className="text-gray-400 hover:text-white transition flex items-center gap-2">
                                    <Github className="w-4 h-4"/>
                                    GitHub Repo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} EagleScout. All rights reserved.
                </div>
            </div>
        </footer>

    );
};
