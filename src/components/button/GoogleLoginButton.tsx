const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const SCOPE = process.env.NEXT_PUBLIC_GOOGLE_SCOPE;
const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

const GoogleLoginButton = () => {
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    const handleGoogleLogin = async () => {
        window.location.assign(oauthUrl);
    };
    return (
        <div className='bg-[blue] text-white flex w-16 justify-center b'>
            <button onClick={handleGoogleLogin}>Google</button>
        </div>
    );
};

export default GoogleLoginButton;
