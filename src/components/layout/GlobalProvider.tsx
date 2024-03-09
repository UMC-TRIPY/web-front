'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function GlobalProvider({
    children
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Header />
                {children}
                <Footer />
            </RecoilRoot>
        </QueryClientProvider>
    );
}
