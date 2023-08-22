import { useState, useEffect } from 'react';
import RoundBtn from '../layout/roundBtn';
import BagPackingModal from '../modal/BagpackingModal';
import MyBagModal from '../modal/MyBagModal';
import { useRouter } from 'next/navigation';
import Pagination from '../maincommunity/Pagination';

interface Props {
    travels: {
        id: number;
        dates: string;
        places: string;
    }[];
    name: string;
}

interface TravelProps {
    travel: {
        id: number;
        dates: string;
        places: string;
    };
}

interface MyBagProps {
    travel: {
        id: number;
        dates: string;
        places: string;
    };
    index: number;
}

export default function ListComp({ travels, name }: Props) {
    const [lists, setLists] =
        useState<{ id: number; dates: string; places: string }[]>(travels);
    const totalPages = Math.ceil(travels.length / 8);
    const [current, setCurrent] = useState<number>(1);
    const [datas, setDatas] = useState<
        { id: number; dates: string; places: string }[]
    >(travels.slice(0, 8));
    useEffect(() => {
        setDatas(travels.slice((current - 1) * 8, current * 8));
    }, [current]);

    const router = useRouter();

    const Content = ({ content }: { content: string }) => (
        <div className='w-1/3 text-center'>{content}</div>
    );

    const onClick = (index: number) => {
        if (confirm('정말 삭제하시겠습니까??') === true) {
            const newTravels = [...lists];
            newTravels.splice(index, 1);
            setLists(newTravels);
            alert('삭제 완료!');
        } else {
            return;
        }
    };

    const TravelList = ({ travel }: TravelProps) => {
        const [modalInfo, setModalInfo] = useState({
            isOpen: false,
            selectedPlace: ''
        });

        const handleModalOpen = (place: string) => {
            setModalInfo({
                isOpen: true,
                selectedPlace: place
            });
        };

        const handleModalClose = () => {
            setModalInfo({
                isOpen: false,
                selectedPlace: ''
            });
        };
        return (
            <div>
                <div className='flex items-center justify-between py-[16.5px]'>
                    <Content content={travel.dates} />
                    <Content content={travel.places} />
                    <div className='flex w-1/3 justify-center'>
                        <RoundBtn
                            label='상세보기'
                            color='bg-lightgrey'
                            onClick={() => handleModalOpen(travel.places)}
                        />
                        <RoundBtn
                            label='가방 만들기'
                            color='bg-lightgrey'
                            onClick={() => router.push('/mybag/new')}
                        />
                    </div>
                </div>
                {modalInfo.isOpen && (
                    <div>
                        <BagPackingModal
                            setIsModal={handleModalClose}
                            selectedPlace={modalInfo.selectedPlace}
                        />
                    </div>
                )}
            </div>
        );
    };

    const MyBagList = ({ travel, index }: MyBagProps) => {
        const [modalInfo, setModalInfo] = useState({
            isOpen: false,
            selectedPlace: ''
        });

        const handleModalOpen = (place: string) => {
            setModalInfo({
                isOpen: true,
                selectedPlace: place
            });
        };

        const handleModalClose = () => {
            setModalInfo({
                isOpen: false,
                selectedPlace: ''
            });
        };

        return (
            <div className='flex items-center justify-between py-[16.5px]'>
                <Content content={travel.dates} />
                <Content content={travel.places} />
                <div className='flex w-1/3 justify-center'>
                    <RoundBtn
                        label='상세보기'
                        color='bg-lightgrey'
                        onClick={() => handleModalOpen(travel.places)}
                    />
                    <RoundBtn
                        label='삭제하기'
                        color='bg-lightgrey'
                        onClick={() => onClick(index)}
                    />
                </div>
                {modalInfo.isOpen && (
                    <div>
                        <MyBagModal
                            setIsModal={handleModalClose}
                            selectedPlace={modalInfo.selectedPlace}
                        />
                    </div>
                )}
            </div>
        );
    };
    return (
        <div className='flex flex-col w-full mb-5'>
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
                    {datas.map(
                        (
                            data: {
                                id: number;
                                dates: string;
                                places: string;
                            },
                            index: number
                        ) =>
                            name === '여행' ? (
                                <TravelList
                                    key={`travelList${index}`}
                                    travel={data}
                                />
                            ) : (
                                <MyBagList
                                    key={`MyBagList${index}`}
                                    travel={data}
                                    index={index}
                                />
                            )
                    )}
                </div>
            </div>
            <Pagination
                totalPages={totalPages}
                current={current}
                setCurrent={setCurrent}
            />
        </div>
    );
}
