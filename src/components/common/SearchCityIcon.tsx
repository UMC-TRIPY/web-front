import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import SearchCityModal from '../modal/SearchCityModal';

interface ISearchPlaceProp {
    place: string;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchCityIcon({
    place,
    modalOpen,
    setModalOpen
}: ISearchPlaceProp) {
    const datas = require('../../../public/data/dummy.json');
    const destinations = datas.travels;
    const filteredDestinations = destinations
        .filter((travel: any) => travel[0][0].includes(place[0]))
        .filter((filteredTravel: any) =>
            filteredTravel[0].includes(place.replace(/ /g, ''))
        );
    return (
        <>
            <Link
                onClick={() => {
                    if (place === '') {
                        alert('1글자 이상 입력해주세요.');
                    }

                    if (filteredDestinations.length !== 1) {
                        alert('해당 여행지가 없습니다.');
                    }
                }}
                href={
                    place === ''
                        ? '/information'
                        : filteredDestinations.length === 1
                        ? `/information/${filteredDestinations.map(
                              (result: [string, string]) => result[1]
                          )}`
                        : '/information'
                }
                className='hover:cursor-pointer absolute'
            >
                <BiSearch size='24' />
            </Link>
            {modalOpen && (
                <SearchCityModal
                    top='top-[320px]'
                    setModalState={setModalOpen}
                    filteredDestinations={filteredDestinations}
                />
            )}
        </>
    );
}
