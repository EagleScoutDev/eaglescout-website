import { ClipboardList, Clock, Users, UserCheck } from 'lucide-react'
import { titilliumWebBold } from '@/lib/fonts';

const Statistic = ({number, description, icon}: {
    number: number;
    description: string;
    icon: React.ReactNode;
}) => {
    return (
        <div className="group text-center">
            <div className="mb-4 flex justify-center">
                <div
                    className="p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            </div>
            <div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {number}+
            </div>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}

const stats = [
    {
        number: 1000,
        description: 'Scouting Entries',
        icon: <ClipboardList className="w-8 h-8"/>
    },
    {
        number: 30,
        description: 'Hours Spent Scouting',
        icon: <Clock className="w-8 h-8"/>
    },
    {
        number: 10,
        description: 'Registered Teams',
        icon: <Users className="w-8 h-8"/>
    },
    {
        number: 200,
        description: 'Active Scouters',
        icon: <UserCheck className="w-8 h-8"/>
    },
]

export const StatsSection = () => {
    return (
    <section className="container mx-auto px-4 py-24 border-t border-white/10">
        <h2 className={`${titilliumWebBold.className} text-4xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}>
            Trusted by Top Teams
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
                <Statistic key={index} {...stat}/>
            ))}
        </div>
    </section>
    )
}
