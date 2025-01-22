import { Cloud, Database, NotebookPen, Shield, Smartphone, Wifi } from 'lucide-react';
import { titilliumWebBold } from '@/lib/fonts';

const Feature = ({name, description, icon}: {
    name: string;
    description: string;
    icon: React.ReactNode;
}) => {
    return (
        <div
            className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-blue-500/10 hover:to-cyan-500/5 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

const features = [
    {
        name: 'Enhanced Data Aggregation',
        description: 'Perfect your robot game with our integrated picklist creator, match predictors, and AI scout report summaries.',
        icon: <Database className="w-6 h-6"/>
    },
    {
        name: 'Customizable Forms',
        description: 'Don\'t wait for the app to update after the season begins! With the in-app form editor, scouting leads can easily create forms to fit their season-specific needs.',
        icon: <NotebookPen className="w-6 h-6"/>
    },
    {
        name: 'Mobile-First',
        description: 'Crush the competition with EagleScout\'s simple yet pleasing UI, providing ease of observation and tracking. With our impeccable mobile compatibility, focus on the match and forget your phone.',
        icon: <Smartphone className="w-6 h-6"/>
    },
    {
        name: 'Your data, Your choice',
        description: 'Data integrity and security is of highest priority to us. Every communication and storage area is secured and backed up as often as once per half hour.',
        icon: <Shield className="w-6 h-6"/>
    },
    {
        name: 'Superior Up-time',
        description: 'While we promise to stay online for years to come, if you ever have a change of heart, you can download your CSV files and move to another platform.',
        icon: <Cloud className="w-6 h-6"/>
    },
    {
        name: 'Offline Support',
        description: 'WIFI spotty at comps? Store your scout reports and notes to upload automatically when you get connection back! Don’t want to wait? Use our QR code scanning features to immediately share your results with a scouting lead!',
        icon: <Wifi className="w-6 h-6"/>
    },
]

export const FeaturesSection = () => {
    return (
        <section id="features" className="container mx-auto px-4 py-24">
            <h2 className={`${titilliumWebBold.className} text-4xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent py-2`}>
                EagleScout at a Glance
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {features.map((feature, index) => (
                    <Feature key={index} {...feature}/>
                ))}
            </div>
        </section>
    );
};
