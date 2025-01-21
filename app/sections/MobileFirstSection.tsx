import Image from 'next/image';
import { Battery, Users, Wifi } from 'lucide-react';
import { SectionFeature } from '@/app/components/SectionFeature';
import { titilliumWebBold } from '@/lib/fonts';
import DataOverviewImage from '@/app/assets/screenshots/data_overview.png';
import ReportListImage from '@/app/assets/screenshots/report_list.png';
import ScoutReportImage from '@/app/assets/screenshots/scout_report.png';

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
            <div className="gap-6 flex md:relative w-full md:h-[600px] mb-16">
                <div
                    className="md:absolute md:left-[35%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:md:z-20">
                    <Image
                        src={DataOverviewImage}
                        alt="Data Overview Image"
                        width={250}
                        className="shadow-2xl opacity-75"
                    />
                </div>
                <div
                    className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:z-30">
                    <Image src={ScoutReportImage}
                           alt="Scout Report Image"
                           width={300}
                           className="shadow-2xl"
                    />
                </div>
                <div
                    className="md:absolute md:left-[65%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:z-20">
                    <Image
                        src={ReportListImage}
                        alt="Report List Image"
                        width={250}
                        className="shadow-2xl opacity-75"
                    />
                </div>
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
