import Image from 'next/image';
import AppImage from '@/app/assets/img.png';
import { SectionFeature } from '@/app/components/SectionFeature';
import { BrainCog } from 'lucide-react';
import { titilliumWebBold } from '@/lib/fonts';

export const UnderstandDataSection = () => {
    return (
        <section className="container mx-auto px-4 py-24 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className={`${titilliumWebBold.className} text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
                    Understand your data
                </h2>
                <p className="text-xl md:text-2xl text-gray-400">EagleScout empowers you to understand other robots</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="order-2 md:order-1 ml-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">All your data. All in one place.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Access comprehensive match data, team statistics, and performance metrics in a single, intuitive
                        dashboard.
                        Compare teams, track progress, and make informed decisions with our powerful analytics tools.
                    </p>
                </div>
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"/>
                    <div className="relative">
                        <Image
                            src={AppImage}
                            alt="Dashboard interface"
                            width={300}
                            className="rounded-3xl shadow-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"/>
                    <div className="relative">
                        <Image
                            src={AppImage}
                            alt="Data tracking interface"
                            width={300}
                            className="rounded-3xl shadow-2xl mx-auto"
                        />
                    </div>
                </div>
                <div className="mr-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Track data points over time</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Watch how teams evolve throughout the competition. Our advanced tracking system lets you monitor
                        key metrics,
                        identify trends, and spot improvements in real-time, giving you the competitive edge you need.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="order-2 md:order-1 ml-24">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Generate picklists with the click of a
                        button</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Say goodbye to manual picklist creation. EagleScout&#39;s intelligent algorithm analyzes team
                        performance data and
                        automatically generates optimized picklists, helping you make strategic alliance selections
                        quickly and
                        confidently.
                    </p>
                </div>
                <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"/>
                    <div className="relative">
                        <Image
                            src={AppImage}
                            alt="Picklist generation interface"
                            width={300}
                            className="rounded-3xl shadow-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <SectionFeature icon={<BrainCog className="w-6 h-6"/>} title="GPT-4 Summarization"
                                description="Don’t have time to sift through the dozens of scouter comments on a robot? Use our GPT-4 powered summarizing tool to quickly gain insights on data."/>
                <SectionFeature icon={<BrainCog className="w-6 h-6"/>} title="Feature Title"
                                description="Feature Description"/>
                <SectionFeature icon={<BrainCog className="w-6 h-6"/>} title="Feature Title"
                                description="Feature Description"/>
            </div>
        </section>
    );
};
