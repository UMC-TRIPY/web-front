import HelpBot from './HelpBot';
import MyTravelList from '../mypage/MyTravelList';
import MyBagList from '../mypage/MyBagList';

export default function MyBag() {
    return (
        <div className='flex flex-col'>
            <div className='font-bold text-5xl mt-20 mb-8 mx-auto'>
                여행 가방을 등록해볼까요?
            </div>
            {/* <HelpBot width='w-[1280px]' /> */}
            <MyTravelList option='가방 만들기' />
            <MyBagList />
        </div>
    );
}
