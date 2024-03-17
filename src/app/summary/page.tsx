'use client';
import List from '@/components/common/List';

export default function SummaryPage() {
    return (
        <List
            items={[
                {
                    date: '2023.06.30~2023.07.02 (2박 3일)',
                    place: '부산',
                    plan_id: 1,
                    schedule_id: 1
                }
            ]}
            label='모아보기'
            mode='travel'
        />
    );
}
