import Follower from "./follower";
import Following from "./following";
import SendFollow from "./sendFollow";

function FriendReq () {
    return(
        <div className="flex justify-start mt-14 mb-48">
            <div className="w-1/2">
                {/* 친구 요청 보내기 */}
                <SendFollow />
            </div>
            <div className="flex-col w-1/2">
                    {/* 내가 보낸 요청 */}
                    <Following />
                    {/* 친구 요청 */}
                    <Follower />
            </div>
        </div>
    )
}

export default FriendReq;