import Friend from "./friend";

function MyFriends () {
    return (
        <div>
            <div className="text-3xl font-bold mx-4 mt-20">나의 친구</div>
            <div className="mx-4 py-4">
            <Friend name="유저닉네임10글자자" />
            <Friend name="유저닉네임10글자자" />
            <Friend name="유저닉네임10글자자" />
            <Friend name="유저닉네임10글자자" />
            </div>
        </div>
    )
}

export default MyFriends;