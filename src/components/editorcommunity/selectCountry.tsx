import React from "react"

interface SelectCountryProps {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    cityEmpty: boolean;
    onCityEmptyError: () => void;
    title: string;
    setTitle: (value: string) => void;
    titleEmpty: boolean;
    onTitleEmptyError: () => void;
}

export default function SelectCountry ({ selectedCity, setSelectedCity, cityEmpty, onCityEmptyError, title, setTitle, titleEmpty, onTitleEmptyError }: SelectCountryProps) {
    const locations = {
        "아시아": {
            "일본": ["도쿄", "오사카", "후쿠오카", "오키나와", "교토", "홋카이도", "일본 기타"],
        },
        "유럽": {
            "영국": ["런던", "리버풀", "맨체스터", "영국 기타"],
            "프랑스": ["파리", "마르세유", "프랑스 기타"],
            "이탈리아": ["로마", "피렌체", "밀라노", "베네치아", "이탈리아 기타"],
            "스페인": ["마드리드", "바르셀로나", "톨레도", "세비야", "그라나다", "스페인 기타"]
        },
        "기타": { "기타": "기타" }
    };

    const AsiaCountries = Object.keys(locations["아시아"]);
    const EuropeCountries = Object.keys(locations["유럽"]);

    const JapanCities = locations["아시아"]["일본"];
    const UKCities = locations["유럽"]["영국"];
    const FranceCities = locations["유럽"]["프랑스"];
    const ItalyCities = locations["유럽"]["이탈리아"];
    const SpainCities = locations["유럽"]["스페인"];
    
    type CityButtonsProps = {
        cities: string[];
    };

    const CityButtons: React.FC<CityButtonsProps> = ({ cities }) => {
        return (
          <div className="flex">
            {cities.map((city, index) => (
                <button
                    key={index}
                    className={`mr-10 ${
                    city === selectedCity ? 
                    'text-primary font-bold border-b-[3px] border-b-primary' 
                    : 'border-b-[3px] border-brightgrey' // 밑줄 생길때 위아래 밀림 방지
                    }`}
                    onClick={() => {
                        setSelectedCity(city); 
                        onCityEmptyError();
                    }}
                >
                    {city}
                </button>
            ))}
          </div>
        );
    };

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        onTitleEmptyError();
    };

    return (
        <div className="mx-4">
            <div className="text-3xl font-bold mb-8">게시글 작성</div>
            <div className="text-xl font-bold">국가를 선택해주세요.</div>
            <div className="bg-brightgrey rounded-lg my-2">
                <div className="flex">
                    <div className="h-[336px] flex flex-col justify-between w-1/6 py-4 pl-6 border-r border-lightgrey">
                        {Object.keys(locations).map((continent, index) => {
                            return (
                                <span key={index} className="font-bold text-grey">{continent}</span>
                            )
                        })}
                    </div>
                    <div className="flex flex-col justify-between w-1/6 py-4 pl-6 border-r border-lightgrey">
                        {AsiaCountries.map((country, index) => {
                            return (
                                <span key={index} className="font-bold">{country}</span>
                            )
                        })}
                        {EuropeCountries.map((country, index) => {
                            return (
                                <span key={index} className="font-bold">{country}</span>
                            )
                        })}
                        <span className="font-bold">{Object.keys(locations["기타"])}</span>
                    </div>
                    <div className="flex flex-col justify-between  w-2/3 py-4 pl-6">
                        <CityButtons cities={JapanCities}/>
                        <CityButtons cities={UKCities}/>
                        <CityButtons cities={FranceCities}/>
                        <CityButtons cities={ItalyCities}/>
                        <CityButtons cities={SpainCities}/>
                        <CityButtons cities={[locations["기타"]["기타"]]} />
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
                    onChange={(e) => {setTitle(e.target.value), handleTitle(e)}} 
                />
            </div>
        </div>
    )
}