import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const PricingCard = () => {
    return (
        <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader className="text-center pb-8 border-b border-zinc-800">
                <h2 className="text-4xl font-bold mb-2 text-white">Free</h2>
                <p className="text-2xl text-gray-400">Free for everyone</p>
            </CardHeader>
            <CardContent className="pb-12 pt-8">
                <ul className="space-y-4 text-white">
                    <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-400" />
                        <span>Unlimited Reports</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-400" />
                        <span>Unlimited Forms</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-400" />
                        <span>Unlimited Competitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-400" />
                        <span>iOS + Android Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-400" />
                        <span>Best-in-class data aggregation</span>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                    <Link href="/get-started">Get Started <ArrowRight className="w-6 h-6" /></Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
