import React, { useState } from "react"

export default function TagEditor() {
    const [tagItem, setTagItem] = useState<string>('');
    const [tagList, setTagList] = useState<string[]>([]);

    function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) { // enter 누르면 submitTagItem 함수 불러옴
        if (e.currentTarget.value.length !== 0 && e.key === 'Enter') {
            submitTagItem()
        }
    }

    function submitTagItem() {
        let updateTagList = [...tagList];
        updateTagList.push(tagItem);
        setTagList(updateTagList);
        setTagItem('');
        console.log(tagList)
    }

    function deleteTagItem(tag: string) {
        const deletedTagList = tagList.filter((tagItem) => tagItem !== tag)
        setTagList(deletedTagList)
        console.log(tagList)
    }

    return (
        <div className="mx-4">
            <div className="flex items-center overflow-x-hidden whitespace-nowrap border border-lightgrey rounded-lg my-3">
                <div className="mx-2">
                {tagList.map((tag, index) => {
                    return (
                        <button 
                            key={index}
                            className="inline-block bg-primary px-4 py-2 mx-2 my-3 rounded-full" 
                            onClick={() => deleteTagItem(tag)}
                        >
                            {tag}
                        </button>
                    )
                })}
                </div>
                <input 
                    type="text"
                    onKeyDown={onKeyPress}
                    value={tagItem}
                    onChange={e => setTagItem(e.currentTarget.value)}
                    placeholder="#태그를 입력해주세요."
                    className="h-16 outline-none"
                />
            </div>
        </div>
    )
}