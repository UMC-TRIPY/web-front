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
            <div className="flex justify-center">
                <button className="mx-6">&lt;</button>
                1
                <button className="mx-6">&gt;</button>
            </div>
        </div>
    )
}

export default MyFriends;