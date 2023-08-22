import React, { useState, useEffect } from 'react';

interface ViewContentProps {
    keyword: string;
}

export default function DummyContent({keyword}: ViewContentProps) {
    return (
        <div className='mx-4 mb-16'>
            <div>
                {keyword}
            </div>
        </div>
    )
}