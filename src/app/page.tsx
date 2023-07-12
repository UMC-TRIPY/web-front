'use client';

import react, { useState } from 'react';
import Image from 'next/image';
import Portal from '@/components/modal/Portal';
import Modal from '@/components/modal/Modal';

export default function Home() {
    const [modal, setModal] = useState(0);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div onClick={() => setModal(1)}>aa</div>
            {modal && (
                <Portal selector='#body'>
                    <Modal>asdasdsadas</Modal>
                </Portal>
            )}
        </main>
    );
}
