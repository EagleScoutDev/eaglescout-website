import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/sections/Hero';
import { FeaturesSection } from '@/app/sections/FeaturesSection';
import { StatsSection } from '@/app/sections/StatsSection';
import { MobileFirstSection } from '@/app/sections/MobileFirstSection';
import { DownloadSection } from '@/app/sections/DownloadSection';
import { Footer } from '@/app/components/Footer';
import { UnderstandDataSection } from '@/app/sections/UnderstandDataSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="bg-dot-8-s-2-neutral-950">
                <Navbar/>
                <Hero/>
            </div>
            <FeaturesSection/>
            <StatsSection/>
            <MobileFirstSection/>
            <UnderstandDataSection/>
            <DownloadSection/>
            <Footer/>
        </div>
    );
}
