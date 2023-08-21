import OtherSchedule from '../detailschedule/OtherSchedule';
import Menu from './Menu';

export default function CommonHeader({ path }: { path: string }) {
    return (
        <>
            <Menu path={path} />
            <OtherSchedule href='summary' register={false} top='top-[285px]' />
        </>
    );
}
