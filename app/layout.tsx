import type { Metadata } from 'next';
import './globals.css';
import { titilliumWebRegular } from '@/lib/fonts';

export const metadata: Metadata = {
    title: 'Eaglescout',
    description: 'Next-generation scouting for FRC',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={titilliumWebRegular.className}>
        {children}
        </body>
        </html>
    );
}
