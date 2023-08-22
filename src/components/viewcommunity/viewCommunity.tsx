import ViewComments from "./viewComments";
import ViewContent from "./viewContent";
import ViewHeader from "./viewHeader";

export default function ViewCommunity() {
    return (
        <div>
            <ViewHeader />
            <ViewContent />
            <ViewComments />
        </div>
    )
}