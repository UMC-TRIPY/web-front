import { CommonSummaryParamsProps } from '@/types/summary';
import OtherSchedule from '../detailschedule/OtherSchedule';
import SummaryMenu from './menu/SummaryMenu';

export default function CommonHeader({ params }: CommonSummaryParamsProps) {
    return (
        <>
            <SummaryMenu params={params} />
            <OtherSchedule href='summary' register={false} top='top-[285px]' />
        </>
    );
}
