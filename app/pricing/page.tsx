import { Navbar } from '@/app/components/Navbar';
import { FreeTitle } from '@/app/pricing/components/FreeTitle';
import { PricingCard } from '@/app/pricing/components/PricingCard';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <FreeTitle />
                    <PricingCard />
                </div>
            </div>
        </div>
    )
}
