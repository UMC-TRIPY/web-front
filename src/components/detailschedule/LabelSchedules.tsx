import { CiLocationOn } from 'react-icons/ci';

export default function LabelSchedules() {
    const schedules = [
        {
            date: '6월30일(토)',
            todos: [
                {
                    color: 'border-l-tag-blue',
                    time: '7:30 AM~8:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: 'F1963 전시회 티켓 오픈, 예매하기',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-tag-red',
                    time: '8:30 AM~1:00 PM',
                    content: '자차로 이동',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-primary',
                    time: '1:00 PM~2:00 PM',
                    content: '점심',
                    additional: '',
                    place: '바릇'
                },
                {
                    color: 'border-l-primary',
                    time: '2:30 PM~4:30 PM',
                    content: '카페',
                    additional: '',
                    place: '힐튼 부산 호텔'
                },
                {
                    color: 'border-l-primary',
                    time: '5:00 PM~6:00 PM',
                    content: 'F1963',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-tag-blue',
                    time: '6:30 PM~7:00 PM',
                    content: '숙소 체크인 & 짐정리',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-primary',
                    time: '7:30 PM~8:30 PM',
                    content: '저녁',
                    additional: '',
                    place: '부산 해운대 시장'
                }
            ]
        },
        {
            date: '7월 1일(일)',
            todos: [
                {
                    color: 'border-l-tag-blue',
                    time: '7:30 AM~8:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-primary',
                    time: '9:00 AM ~ 10:00AM',
                    content: '아침',
                    additional: '',
                    place: '해목 해운대점'
                },
                {
                    color: 'border-l-primary',
                    time: '10:30 AM ~ 8:30 PM',
                    content: '부산 롯데월드',
                    additional: '안에서 점심, 저녁 먹기',
                    place: '장소 등록'
                }
            ]
        },
        {
            date: '7월 2일(일)',
            todos: [
                {
                    color: 'border-l-tag-blue',
                    time: '8:30 AM~9:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-primary',
                    time: '10:00 AM ~ 11:00 AM',
                    content: '아침',
                    additional: '',
                    place: '밀양순대돼지국밥 부산본점'
                },
                {
                    color: 'border-l-primary',
                    time: '11:15 AM ~ 11:30 AM',
                    content: '해운대',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-tag-blue',
                    time: '11:30 AM ~ 12:00 AM',
                    content: '나가하마만게츠 현장 테이블링',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-primary',
                    time: '12:00 PM ~ 1:00 PM',
                    content: '점심',
                    additional: '',
                    place: '나가하마만게츠'
                },
                {
                    color: 'border-l-primary',
                    time: '1:30 PM ~ 2:30 PM',
                    content: '동백섬',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-primary',
                    time: '3:30 PM ~ 4:30 PM',
                    content: '해리단길',
                    additional: '',
                    place: '장소 등록'
                },
                {
                    color: 'border-l-tag-red',
                    time: '4:30 PM ~ 9:30 PM',
                    content: '집 가기',
                    additional: '중간에 휴게소 들러서 저녁먹기!',
                    place: '장소 등록'
                }
            ]
        }
    ];
    return (
        <div className='text-xl mb-16'>
            {schedules.map((schedule, index) => {
                return (
                    <div key={index} className='mb-8'>
                        <div key={`schcon${index}`} className='mb-3'>
                            <span key={`schdaynum${index}`} className='mr-8 '>
                                {index + 1}일차
                            </span>
                            <span key={`schdate${index}`}>{schedule.date}</span>
                        </div>
                        {schedule.todos.map((todo, idx) => {
                            return (
                                <div
                                    key={`schwrap${idx}`}
                                    className={`border border-lightgrey border-l-8 rounded-lg pl-9 mb-2 ${todo.color}`}
                                >
                                    <div
                                        key={`schtime${idx}`}
                                        className='text-xs text-grey py-2.5'
                                    >
                                        {todo.time}
                                    </div>
                                    <div
                                        key={`schcontent${idx}`}
                                        className='flex justify-between text-base'
                                    >
                                        <div
                                            key={`schinwrap${idx}`}
                                            className='flex'
                                        >
                                            <div
                                                key={`schdetail${idx}`}
                                                className='mr-10 mb-4'
                                            >
                                                {todo.content}
                                            </div>
                                            <div
                                                key={`schadd${idx}`}
                                                className='text-grey'
                                            >
                                                {todo.additional}
                                            </div>
                                        </div>
                                        <div className='flex text-base items-center'>
                                            <CiLocationOn size={20} />
                                            <span className='ml-2 mr-4'>
                                                {todo.place}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
