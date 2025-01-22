import { DownloadSection } from '@/app/sections/DownloadSection';
import { Navbar } from '@/app/components/Navbar';
import { MoreInfo } from '@/app/get-started/components/MoreInfo';
import { Footer } from '@/app/components/Footer';

export default function GetStarted() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar/>
            <DownloadSection/>
            <MoreInfo/>
            <Footer/>
        </div>
    );
}
