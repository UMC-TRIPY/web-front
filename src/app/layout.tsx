import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import GlobalProvider from '@/components/layout/GlobalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'TRIPY',
    description:
        'A service that provides everything from packing to planning to travel at once'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <Script src='https://developers.kakao.com/sdk/js/kakao.js'></Script>
            <body id='body' className={inter.className}>
                <GlobalProvider>{children}</GlobalProvider>
            </body>
        </html>
    );
}
