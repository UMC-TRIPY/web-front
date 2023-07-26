import { useState } from 'react';
import RoundBtn from '../layout/roundBtn';

interface TravelProps {
    travels: {
        id: number;
        dates: string;
        places: string;
    }[];
    name: string;
}

interface Props {
    travel: {
        id: number;
        dates: string;
        places: string;
    };
}

export default function ListComp({ travels, name }: TravelProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [travelsPerPage] = useState(8);
    const handlePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const indexOfLastTravel = currentPage * travelsPerPage;
    const indexOfFirstTravel = indexOfLastTravel - travelsPerPage;
    const currentTravels = travels.slice(indexOfFirstTravel, indexOfLastTravel);

    const Content = ({ content }: { content: string }) => (
        <div className='w-1/3 text-center'>{content}</div>
    );

    const TravelList = ({ travel }: Props) => {
        return (
            <div className='flex items-center justify-between py-[16.5px]'>
                <Content content={travel.dates} />
                <Content content={travel.places} />
                <div className='flex w-1/3 justify-center'>
                    <RoundBtn label='상세보기' color='bg-lightgrey' />
                    <RoundBtn label='가방 만들기' color='bg-lightgrey' />
                </div>
            </div>
        );
    };

    const MyBagList = ({ travel }: Props) => {
        return (
            <div className='flex items-center justify-between py-[16.5px]'>
                <Content content={travel.dates} />
                <Content content={travel.places} />
                <div className='flex w-1/3 justify-center'>
                    <RoundBtn label='상세보기' color='bg-lightgrey' />
                    <RoundBtn label='삭제하기' color='bg-lightgrey' />
                </div>
            </div>
        );
    };
    return (
        <>
            <div className='text-3xl font-bold mb-5 self-start'>
                내 {name} 목록
            </div>
            <div className='rounded-lg bg-brightgrey w-full'>
                <div className='border-b border-b-lightgrey py-5'>
                    <div className='flex justify-between'>
                        <Content content='일정' />
                        <Content content='장소' />
                        <Content content='관리하기' />
                    </div>
                </div>
                <div className='py-5'>
                    {currentTravels.map((travel, index) =>
                        name === '여행' ? (
                            <TravelList
                                key={`travelList${index}`}
                                travel={travel}
                            />
                        ) : (
                            <MyBagList
                                key={`MyBagList${index}`}
                                travel={travel}
                            />
                        )
                    )}
                </div>
            </div>
            <div className='flex justify-center m-8 text-grey mb-24'>
                <button
                    className='mx-4 px-2'
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {currentPage}
                <button
                    className='mx-4 px-2'
                    onClick={handleNextClick}
                    disabled={indexOfLastTravel >= travels.length}
                >
                    &gt;
                </button>
            </div>
        </>
    );
}
