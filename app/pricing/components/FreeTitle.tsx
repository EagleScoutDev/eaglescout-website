import { titilliumWebBold } from '@/lib/fonts';

export const FreeTitle = () => {
    return (
        <div>
            <h1 className={`${titilliumWebBold.className} text-4xl md:text-6xl font-bold mb-6`}>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                EagleScout
              </span>{" "}
                is free. <span className="block mt-2">Forever.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Your data is always in your hands. Export it and move to another scouting app, for all we care. We never
                lock you in to anything.
            </p>
        </div>
    )
}
