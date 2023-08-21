import Image from 'next/image';

interface Props {
    name: string;
    reviews: string;
    lat: string;
    lng: string;
    image: string;
}

export default function Places({ cities }: { cities: Props[] }) {
    const City = ({ city }: { city: Props }) => {
        return (
            <div className='flex min-w-[305px] h-[400px]'>
                <Image src={city.image} alt='none' width={305} height={400} />
                <div className='absolute flex flex-col justify-between h-[400px] px-8 py-7'>
                    <div>
                        <div className='font-bold text-2xl'>{city.name}</div>
                        <div className='text-sm'>{city.reviews}</div>
                    </div>
                    <button className='w-[104px] h-11 rounded-md opacity-75 bg-white hover:opacity-100'>
                        둘러보기
                    </button>
                </div>
            </div>
        );
    };
    return (
        <div className='my-5 flex justify-between'>
            {cities.map((city: Props, idx: number) => (
                <City key={`city${idx}`} city={city} />
            ))}
        </div>
    );
}
