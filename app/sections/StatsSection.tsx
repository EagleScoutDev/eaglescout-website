'use client';
import { ClipboardList, Clock, Users, UserCheck } from 'lucide-react';
import { titilliumWebBold } from '@/lib/fonts';
import { useEffect, useRef, useState } from 'react';

const targetTime = 2000;

const Statistic = ({
	number,
	description,
	icon,
}: {
	number: number;
	description: string;
	icon: React.ReactNode;
}) => {
	const statRef = useRef<HTMLDivElement>(null);
	const [num, setNum] = useState(1);

	useEffect(() => {
		if (!statRef.current) return;
		const { top } = statRef.current.getBoundingClientRect();
		let start: number | null = null;
		const step = (timestamp: number) => {
			if (top > window.scrollY + window.innerHeight) {
				requestAnimationFrame(step);
				return;
			}
			if (!start) start = timestamp;
			const progress = timestamp - start;
			const increment = Math.min(
				Math.floor((progress / targetTime) * number),
				number,
			);
			setNum(increment);
			if (increment < number) {
				requestAnimationFrame(step);
			}
		};
		requestAnimationFrame(step);
	}, []);

	return (
		<div className="group text-center" ref={statRef}>
			<div className="mb-4 flex justify-center">
				<div className="p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
					{icon}
				</div>
			</div>
			<div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
				{num}+
			</div>
			<p className="text-gray-400">{description}</p>
		</div>
	);
};

const stats = [
	{
		number: 1000,
		description: 'Scouting Entries',
		icon: <ClipboardList className="w-8 h-8" />,
	},
	{
		number: 30,
		description: 'Hours Spent Scouting',
		icon: <Clock className="w-8 h-8" />,
	},
	{
		number: 10,
		description: 'Registered Teams',
		icon: <Users className="w-8 h-8" />,
	},
	{
		number: 200,
		description: 'Active Scouters',
		icon: <UserCheck className="w-8 h-8" />,
	},
];

export const StatsSection = () => {
	return (
		<section className="container mx-auto px-4 py-24 border-t border-white/10">
			<h2
				className={`${titilliumWebBold.className} text-4xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent`}
			>
				Trusted by Top Teams
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				{stats.map((stat, index) => (
					<Statistic key={index} {...stat} />
				))}
			</div>
		</section>
	);
};
