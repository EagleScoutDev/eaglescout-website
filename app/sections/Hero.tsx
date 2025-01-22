import Image from 'next/image';
import TeamOverviewImage from '@/app/assets/screenshots/team_overview.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { titilliumWebBold } from '@/lib/fonts';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="relative w-full md:w-1/2 flex justify-center">
                    <div className="absolute w-[300px] h-[600px] bg-blue-500/20 blur-[100px] rounded-full"/>
                    <div className="relative">
                        <Image
                            src={TeamOverviewImage}
                            alt="EagleScout App Interface"
                            width={300}
                            height={600}
                            className="relative z-10"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className={`${titilliumWebBold.className} text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent py-2`}>
                        EagleScout
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8">Scouting at your fingertips.</p>
                    <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-full"
                    >
                        <Link href="/get-started">Get Started <ArrowRight className="w-6 h-6" /></Link>
                    </Button>
                </div>
            </div>
        </main>
    );
};
