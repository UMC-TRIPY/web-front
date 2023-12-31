import Image from 'next/image';
import Link from 'next/link';

export default function CommonHeader() {
    const countries = [
        ['전체', '/images/entire2.png', "/community"],
        ['일본', '/images/japan.png', "/community/japan"],
        ['베트남', '/images/vietnam.png', "/community/vietnam"],
        ['영국', '/images/uk.png', "/community/uk"],
        ['프랑스', '/images/france.png', "/community/france"],
        ['이탈리아', '/images/italy.png', "/community/italy"],
        ['스페인', '/images/spain.png', "/community/spain"]
    ];
    return (
        <div className='flex justify-between mb-[120px]'>
            {countries.map((country, idx) => (
                <Link href={country[2]} key={`countrycontainer${idx}`}>
                <div
                    key={`countrycontainer${idx}`}
                    className='flex flex-col items-center mt-9 hover:cursor-pointer'
                >
                    <div
                        key={`country${idx}`}
                        className='w-[100px] h-[100px] rounded-[20px] border border-lightgrey flex items-center justify-center mb-3'
                    >
                        <Image
                            src={country[1]}
                            alt='icon'
                            width={60}
                            height={60}
                        />
                    </div>
                    {country[0]}
                </div>
                </Link>
            ))}
        </div>
    );
}
