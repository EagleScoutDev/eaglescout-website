import React from 'react';

export const SectionFeature = ({icon, title, description}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => {
    return (
        <div
            className="group p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 hover:from-blue-500/10 hover:to-cyan-500/5 transition-all duration-300">
            <div className="mb-4">
                <div className="p-3 inline-block rounded-lg bg-blue-500/10 text-blue-400">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
