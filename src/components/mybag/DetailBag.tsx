import { useState } from "react";

export default function DetailBag() {
    const [bags, setBags] = useState([
        {
            bagId: 1,
            type: "크로스 백",
            supplies: [
                { supId: 1, name: "지갑", checked: false },
                { supId: 2, name: "자외선 차단제", checked: false },
                { supId: 3, name: "여권", checked: false },
                { supId: 4, name: "에어팟", checked: false },
                { supId: 5, name: "필름 카메라", checked: false },
                { supId: 6, name: "삼각대", checked: false },
                { supId: 7, name: "뮤지엄패스", checked: false },
                { supId: 8, name: "미니 파우치", checked: false },
            ]
        },
        {
            bagId: 2,
            type: "캐리어",
            supplies: [
                { supId: 9, name: "옷", checked: false },
                { supId: 10, name: "클렌징 폼", checked: false },
                { supId: 11, name: "닌텐도 스위치", checked: false },
                { supId: 12, name: "보조배터리", checked: false },
                { supId: 13, name: "충전기", checked: false },
                { supId: 14, name: "잠옷", checked: false },
                { supId: 15, name: "속옷", checked: false },
                { supId: 16, name: "양말", checked: false },
            ]
        }
    ]);

    const handleCheckboxChange = (bagId: number, supId: number) => {
        setBags(prevBags => {
            const updatedBags = prevBags.map((bag, idx) => {
                if (idx !== bagId) {
                    return bag;
                }
                const updatedSupplies = bag.supplies.map((supply, sId) => {
                    if (sId !== supId) {
                        return supply;
                    }
                    return {
                        ...supply,
                        checked: !supply.checked
                    };
                });
                return {
                    ...bag,
                    supplies: updatedSupplies
                };
            });
            return updatedBags;
        });
    };

    return (
        <div>
            {bags.map((bag, bagId) => {
                return (
                    <div key={bagId} className="mb-7">
                        <div className="text-grey border-b border-1-lightgrey pb-3">
                            {bag.type}
                        </div>
                        {bag.supplies.map((supply, supId) => {
                            return (
                                <div 
                                key={supId} 
                                className={`flex justify-between border-b border-1-lightgrey py-4 pl-6 ${supply.checked ? 'line-through' : ''}`}
                                >
                                    {supply.name}
                                    <div className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            className='mr-2'
                                            checked={supply.checked}
                                            onChange={() => handleCheckboxChange(bagId, supId)}
                                        />
                                    </div>
                                </div>
                            )
                        })}    
                    </div>
                )
            })}
        </div>
    )
}