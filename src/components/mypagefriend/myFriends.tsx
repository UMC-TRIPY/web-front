import Friend from "./friend";
import React, { useState } from "react";

function MyFriends () {
    const [currentPage, setCurrentPage] = useState(1);
    const [friendsPerPage] = useState(4);
    const [friends, setFriends] = useState([
        '미리',
        '메이',
        '규',
        '루카',
        '레니',
        '시미',
        '초이',
        '폴',
        '에그먼',
    ]);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    };
    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    };

    const indexOfLastFriend = currentPage * friendsPerPage;
    const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
    const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

    return (
        <div>
            <div className="text-3xl font-bold mx-4 mt-20">나의 친구</div>
            <div className="mx-4 py-4">
                {currentFriends.map((friend, index) => (
                    <Friend key={index} name={friend} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="mx-4 px-2" onClick={handlePrevClick} disabled={currentPage === 1}>
                    &lt;
                </button>
                {currentPage}
                <button className="mx-4 px-2" onClick={handleNextClick} disabled={indexOfLastFriend >= friends.length}>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default MyFriends;