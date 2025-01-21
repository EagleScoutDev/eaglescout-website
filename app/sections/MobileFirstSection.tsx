import Image from 'next/image';
import { Battery, Users, Wifi } from 'lucide-react';
import { SectionFeature } from '@/app/components/SectionFeature';
import { titilliumWebBold } from '@/lib/fonts';
import AppImage from '@/app/assets/img.png';

export const MobileFirstSection = () => {
    return (
        <section className="container mx-auto px-4 py-24 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className={`${titilliumWebBold.className} text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
                    Mobile-First
                </h2>
                <p className="text-2xl md:text-3xl text-white mb-4">
                    The best scouting device is the one in your pocket.
                </p>
                <p className="text-gray-400 text-lg">
                    No cumbersome tablets. No hefty laptops.
                </p>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] mb-20 flex justify-center items-center gap-16">
                <Image
                    src={AppImage}
                    alt="iOS phone mockup"
                    width={300}
                    className="rounded-3xl shadow-2xl opacity-75"
                />
                <Image
                    src={AppImage}
                    alt="iOS phone mockup"
                    width={300}
                    className="rounded-3xl shadow-2xl z-10"
                />
                <Image
                    src={AppImage}
                    alt="iOS phone mockup"
                    width={300}
                    className="rounded-3xl shadow-2xl opacity-75"
                />
            </div>
            <div className="text-center mb-20">
                <p className="text-2xl md:text-3xl text-white mb-4">
                    iPhone or Android. Big or Small.
                </p>
                <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                    EagleScout is on it all.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <SectionFeature icon={<Users className="w-6 h-6"/>} title="Time-tested UI"
                                description="EagleScout has been refined through the feedback of hundreds of scouters. From the first launch to the last match, you will always know what you're doing."/>
                <SectionFeature icon={<Wifi className="w-6 h-6"/>} title="Built for Offline"
                                description="No internet? No problem. EagleScout stores all reports on-device until an internet connection is established."/>
                <SectionFeature icon={<Battery className="w-6 h-6"/>} title="Optimized for Competition"
                                description="We know you'll be out there in the stands for a day. EagleScout takes a such a small amount of power, you won't even notice!"/>
            </div>
        </section>
    );
};
