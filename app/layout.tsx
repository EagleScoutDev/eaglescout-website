'use client';
import './globals.css';
import { titilliumWebRegular } from '@/lib/fonts';

// export const metadata: Metadata = {
//     title: 'EagleScout',
//     description: 'Next-generation scouting for FRC',
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={titilliumWebRegular.className}>
        {children}
        <script dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', () => {
                console.log('DOMContentLoaded');
                setTimeout(() => {
                    const elements = document.getElementsByClassName('animation-class');
                    console.log(elements);
                    for (let i = 0; i < elements.length; i++) {
                        const element = elements[i];
                        element.classList.remove('opacity-0');
                        element.classList.remove('translate-y-12');
                        element.classList.add('opacity-100');
                        element.classList.add('translate-y-0');
                    }
                }, 100);
            });
            `,
        }}/>
        </body>
        </html>
    );
}
