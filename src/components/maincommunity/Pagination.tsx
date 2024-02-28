export default function Pagination({
    totalPages,
    current,
    setCurrent
}: {
    totalPages: number;
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    const slicingPages = pages.slice(
        Math.floor((current - 1) / 5) * 5,
        (Math.floor((current - 1) / 5) + 1) * 5
    );

    const prevPage = () => {
        setCurrent((n) => n - 1);
    };

    const nextPage = () => {
        setCurrent((n) => n + 1);
    };

    return (
        <div className='flex justify-center'>
            <div className='flex mt-10 text-grey'>
                <button
                    className='mr-3'
                    disabled={current === 1}
                    onClick={prevPage}
                >
                    {'<'}
                </button>
                {slicingPages.map((p, idx) => (
                    <button
                        key={`pagenum${idx}`}
                        className={`mx-3 ${
                            current - 1 ===
                            idx + Math.floor((current - 1) / 5) * 5
                                ? 'font-bold'
                                : 'font-normal'
                        }`}
                        onClick={() => setCurrent(p)}
                    >
                        {p}
                    </button>
                ))}
                <button
                    className='ml-3'
                    disabled={current === pages.length}
                    onClick={nextPage}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}
