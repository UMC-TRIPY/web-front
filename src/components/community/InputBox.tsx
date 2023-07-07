const InputBox = () => {
    return (
        <div className='flex items-center w-4/5'>
            <label
                htmlFor='small-input'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            ></label>
            <input
                type='text'
                id='small-input'
                placeholder='검색어를 입력하세요'
                className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500'
            ></input>
        </div>
    );
};

export default InputBox;
