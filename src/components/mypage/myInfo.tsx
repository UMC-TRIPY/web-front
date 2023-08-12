import { IUser } from '@/types/user';
import InfoInput from './infoInput';

export default function MyInfo({ userData }: { userData: IUser }) {
    return (
        <div>
            <div className='text-3xl font-bold mx-4'>기본정보</div>
            <div className='mx-4 py-4'>
                <div>
                    <div className='text-lg'>이메일</div>
                    <div className='border-2 p-3 my-4 text-grey'>
                        {userData.email}
                    </div>
                </div>
                <div>
                    <div className='text-lg'>닉네임</div>
                    <div className='border-2 p-3 my-4 text-grey'>
                        {userData.nickname}
                    </div>
                </div>
                <InfoInput label='국적과 지역' />
                <InfoInput label='성별' placeholder='성별' />
            </div>
        </div>
    );
}
