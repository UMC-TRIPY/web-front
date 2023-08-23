import React, { useEffect } from "react"

interface SelectCountryProps {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    cityEmpty: boolean;
    onCityEmptyError: () => void;
    title: string;
    setTitle: (value: string) => void;
    titleEmpty: boolean;
    onTitleEmptyError: () => void;
    postData: any;
    setPostData: (data: any) => void;
}

export default function SelectCountry ({ 
    selectedCity, 
    setSelectedCity, 
    cityEmpty, 
    onCityEmptyError, 
    title, 
    setTitle, 
    titleEmpty, 
    onTitleEmptyError,
    postData,
    setPostData,
}: SelectCountryProps) {
    const continents = [
        {
        continent_index: 1,
        name: "아시아",
        countries: [
            {
            country_index: 1,
            name: "일본",
            cities: [
                {
                city_index: 1,
                name: "오사카",
                },
                {
                city_index: 2,
                name: "도쿄",
                },
                {
                city_index: 3,
                name: "후쿠오카",
                },
                {
                city_index: 4,
                name: "오키나와",
                },
                {
                city_index: 5,
                name: "교토",
                },
                {
                city_index: 6,
                name: "홋카이도",
                },
            ],
            },
        ],
        },
        {
        continent_index: 2,
        name: "유럽",
        countries: [
            {
            country_index: 9,
            name: "영국",
            cities: [
                {
                city_index: 7,
                name: "런던",
                },
            ],
            },
            {
                country_index: 10,
                name: "스페인",
                cities: [
                {
                    city_index: 8,
                    name: "마드리드",
                },
                {
                    city_index: 9,
                    name: "바르셀로나",
                },
                {
                    city_index: 10,
                    name: "톨레도",
                },
                {
                    city_index: 11,
                    name: "세비야",
                },
                {
                    city_index: 12,
                    name: "그라나다",
                },
                ],
            },
            {
            country_index: 12,
            name: "이탈리아",
            cities: [
                {
                city_index: 13,
                name: "로마",
                },
                {
                city_index: 14,
                name: "피렌체",
                },
                {
                city_index: 15,
                name: "밀라노",
                },
                {
                city_index: 16,
                name: "베네치아",
                },
            ],
            },
            {
                country_index: 6,
                name: "프랑스",
                cities: [
                {
                    city_index: 17,
                    name: "파리",
                },
                ],
            },
            // 다른 유럽 국가들
        ],
        },
        // 다른 대륙들
    ];      

    const AsiaCountries = continents.find(continent => continent.continent_index === 1);
    const EuropeCountries = continents.find(continent => continent.continent_index === 2);
    
    const JapanCities = AsiaCountries?.countries.find(country => country.country_index === 1)?.cities;
    const UKCities = EuropeCountries?.countries.find(country => country.country_index === 9)?.cities;
    const SpainCities = EuropeCountries?.countries.find(country => country.country_index === 10)?.cities;
    const ItalyCities = EuropeCountries?.countries.find(country => country.country_index === 12)?.cities;
    const FranceCities = EuropeCountries?.countries.find(country => country.country_index === 6)?.cities;

    type CityButtonsProps = {
        cities: {
            city_index: number;
            name: string;
        }[] | undefined;
    };

    const CityButtons: React.FC<CityButtonsProps> = ({ cities }) => {
        return (
            <div className="flex">
                {cities?.map((city, index) => (
                    <button
                        key={index}
                        className={`mr-10 ${
                            city.name === selectedCity ?
                            'text-primary font-bold border-b-[3px] border-b-primary' :
                            'border-b-[3px] border-brightgrey'
                        }`}
                        onClick={() => {
                            setSelectedCity(city.name); // 도시 이름을 선택
                            onCityEmptyError();
                            setPostData({
                                ...postData,
                                city_index: city.city_index, // 도시의 city_index를 설정
                            });
                        }}
                    >
                        {city.name}
                    </button>
                ))}
            </div>
        );
    };
    

    // title input 관리 함수
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setPostData({
            ...postData,
            post_title: newTitle,
        });
        onTitleEmptyError();
    };

    return (
        <div className="mx-4">
            <div className="text-3xl font-bold mb-8">게시글 작성</div>
            <div className="text-xl font-bold">국가를 선택해주세요.</div>
            <div className="bg-brightgrey rounded-lg my-2">
                <div className="flex">
                    <div className="h-[336px] flex flex-col justify-between w-1/6 py-4 pl-6 border-r border-lightgrey">
                        {continents.map((continent) => {
                            return (
                                <span key={continent.continent_index} className="font-bold text-grey">{continent.name}</span>
                            )
                        })}
                        <span className="font-bold text-grey">기타</span>
                    </div>
                    <div className="flex flex-col justify-between w-1/6 py-4 pl-6 border-r border-lightgrey">
                        {AsiaCountries && AsiaCountries.countries.map((country) => {
                            return (
                                <span key={country.country_index} className="font-bold">{country.name}</span>
                            )
                        })}
                        {EuropeCountries && EuropeCountries.countries.map((country) => {
                            return (
                                <span key={country.country_index} className="font-bold">{country.name}</span>
                            )
                        })}
                        <span className="font-bold">기타</span>
                    </div>
                    <div className="flex flex-col justify-between  w-2/3 py-4 pl-6">
                        <CityButtons cities={JapanCities}/>
                        <CityButtons cities={UKCities}/>
                        <CityButtons cities={FranceCities}/>
                        <CityButtons cities={ItalyCities}/>
                        <CityButtons cities={SpainCities}/>
                        <span>기타</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-2 mb-2">
                <div className={`w-1/6 h-12 bg-brightgrey ${!selectedCity && cityEmpty ? 'border border-alertred' : ''} rounded-lg flex items-center justify-center`}>
                    {selectedCity ? (
                        <span className="font-bold">{selectedCity}</span>
                    ) : (
                        <span className={`${cityEmpty ? 'text-alertred' : 'text-grey'}`}>국가명</span>
                    )}
                </div>
                <input 
                    className={`w-5/6 ml-5 pl-4 border ${!title && titleEmpty ? 'border-alertred' : 'border-lightgrey'} rounded-lg`}
                    placeholder="제목을 입력해주세요." 
                    value={title}
                    onChange={(e) => handleTitle(e)} 
                />
            </div>
        </div>
    )
}