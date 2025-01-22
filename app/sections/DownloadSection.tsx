import Image from 'next/image';
import Link from 'next/link';
import AppStoreIcon from '@/app/assets/app_store_icon.svg';
import PlayStoreIcon from '@/app/assets/play_store_icon.svg';
import { titilliumWebBold } from '@/lib/fonts';

export const DownloadSection = () => {
    return (
        <section className="container mx-auto px-4 py-24 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className={`${titilliumWebBold.className} text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent py-2`}>
                    Download EagleScout Now
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 mb-12">Start scouting smarter, not harder.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="https://apps.apple.com/us/app/eaglescout/id6447322775"
                        className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 px-8 flex items-center gap-3 w-full sm:w-auto border-2 border-white/50"
                    >
                        <Image src={AppStoreIcon} alt="App Store Icon" width={32} height={32}/>
                        <div className="text-left">
                            <div className="text-sm text-gray-400">Download on the</div>
                            <div className="text-xl font-semibold">App Store</div>
                        </div>
                    </Link>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.eaglescout"
                        className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 px-8 flex items-center gap-3 w-full sm:w-auto border-2 border-white/50"
                    >
                        <Image src={PlayStoreIcon} alt="Play Store Icon" width={32} height={32}/>
                        <div className="text-left">
                            <div className="text-sm text-gray-400">Get it on</div>
                            <div className="text-xl font-semibold">Google Play</div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
