import { deleteAccount, editInformation } from '@/apis/user/login';
import { isLoggedInState } from '@/states/user';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import ConfirmBtn from '../layout/confirmBtn';

export default function ConfirmBtns() {
    const router = useRouter();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);

    const handleDeleteUser = () => {
        deleteAccount().then(() => {
            alert('탈퇴하였습니다.');
            setIsLoggedIn(false);
            router.push('/');
        });
    };

    const handleEditUserInfo = async (
        nationality: string,
        profileImg: string
    ) => {
        await editInformation(nationality, profileImg);
    };

    return (
        <div className='flex justify-center mt-14 mb-48'>
            <ConfirmBtn
                label='탈퇴하기'
                color='bg-lightgrey'
                onClick={handleDeleteUser}
            />
            <ConfirmBtn
                label='수정하기'
                color='bg-primary'
                onClick={handleEditUserInfo}
            />
        </div>
    );
}
