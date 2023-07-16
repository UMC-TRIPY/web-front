import { FcGoogle } from 'react-icons/fc';

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const SCOPE = process.env.NEXT_PUBLIC_GOOGLE_SCOPE;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

const GoogleLoginButton = () => {
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    const handleGoogleLogin = async () => {
        window.location.assign(oauthUrl);
    };
    return (
        <>
            <div
                className='flex border-2 border-[#262626] border-black cursor-pointer h-16 rounded-xl overflow-hidden'
                onClick={handleGoogleLogin}
            >
                <div className='flex bg-[#262626] basis-2/12 justify-center items-center text-2xl '>
                    <FcGoogle />
                </div>
                <div className='flex text-black basis-10/12 justify-center items-center'>
                    구글로 로그인하기
                </div>
            </div>
        </>
    );
};

export default GoogleLoginButton;
