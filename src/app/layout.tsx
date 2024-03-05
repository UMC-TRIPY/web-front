import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';
import RecoilProvider from './RecoilProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    const queryClient = new QueryClient();
    return (
        <html lang='en'>
            <QueryClientProvider client={queryClient}>
                <Script src='https://developers.kakao.com/sdk/js/kakao.js'></Script>
                <RecoilProvider>
                    <body id='body' className={inter.className}>
                        {/* <div className='modal absolute top-1/4 left-1/4'></div> */}
                        <Header />
                        {children}
                        <Footer />
                    </body>
                </RecoilProvider>
            </QueryClientProvider>
        </html>
    );
}
