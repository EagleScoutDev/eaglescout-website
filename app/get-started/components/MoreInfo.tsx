import Link from 'next/link';

export const MoreInfo = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4">For Scouters</h2>
                    <p className="text-lg text-gray-400">
                        If your team is registered on EagleScout, you can sign up for a new account and get scouting
                        immediately.{' '}
                        <Link href="/docs/scouter" className="text-blue-400 hover:underline">
                            Read the scouter docs
                        </Link>{' '}
                        for more information.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">For Scouting Leads</h2>
                    <p className="text-lg text-gray-400">
                        If you&#39;re a scouting lead, you can register your team to scout in a few simple steps.{' '}
                        <Link href="/docs/lead" className="text-blue-400 hover:underline">
                            Read the scouting lead docs
                        </Link>{' '}
                        to learn more.
                    </p>
                </div>
            </div>
        </section>
    );
};
