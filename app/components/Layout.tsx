import { motion } from 'framer-motion';

const Layout = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-black">
		<motion.div
			initial={{ x: 300, opacity: 0.5 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 300, opacity: 0.5 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 40,
			}}
		>
			{children}
		</motion.div>
	</div>
);

export default Layout;
