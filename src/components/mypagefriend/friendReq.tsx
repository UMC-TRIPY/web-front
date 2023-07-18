import Follower from "./follower";
import Following from "./following";
import SendFollow from "./sendFollow";

function FriendReq () {
    return(
        <div className="flex justify-start mt-14 mb-48">
            <div className="w-1/2">
                <SendFollow />
            </div>
            <div className="flex-col w-1/2">
                    <Following />
                    <Follower />
            </div>
        </div>
    )
}

export default FriendReq;