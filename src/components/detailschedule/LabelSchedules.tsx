import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';

interface ILabelScheduleProps {
    status: 'page' | 'modal' | 'modal2';
}

export default function LabelSchedules({ status }: ILabelScheduleProps) {
    const [schedules, setSchedules] = useState([
        {
            date: '6월30일(토)',
            todos: [
                {
                    color: 'border-l-tag-blue',
                    time: '7:30 AM~8:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: 'F1963 전시회 티켓 오픈, 예매하기',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-tag-red',
                    time: '8:30 AM~1:00 PM',
                    content: '자차로 이동',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '1:00 PM~2:00 PM',
                    content: '점심',
                    additional: '',
                    place: '바릇', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '2:30 PM~4:30 PM',
                    content: '카페',
                    additional: '',
                    place: '힐튼 부산 호텔', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '5:00 PM~6:00 PM',
                    content: 'F1963',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-tag-blue',
                    time: '6:30 PM~7:00 PM',
                    content: '숙소 체크인 & 짐정리',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '7:30 PM~8:30 PM',
                    content: '저녁',
                    additional: '',
                    place: '부산 해운대 시장', 
                    checked: false
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
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '9:00 AM ~ 10:00AM',
                    content: '아침',
                    additional: '',
                    place: '해목 해운대점', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '10:30 AM ~ 8:30 PM',
                    content: '부산 롯데월드',
                    additional: '안에서 점심, 저녁 먹기',
                    place: '장소 등록', 
                    checked: false
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
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '10:00 AM ~ 11:00 AM',
                    content: '아침',
                    additional: '',
                    place: '밀양순대돼지국밥 부산본점', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '11:15 AM ~ 11:30 AM',
                    content: '해운대',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-tag-blue',
                    time: '11:30 AM ~ 12:00 AM',
                    content: '나가하마만게츠 현장 테이블링',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '12:00 PM ~ 1:00 PM',
                    content: '점심',
                    additional: '',
                    place: '나가하마만게츠', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '1:30 PM ~ 2:30 PM',
                    content: '동백섬',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-primary',
                    time: '3:30 PM ~ 4:30 PM',
                    content: '해리단길',
                    additional: '',
                    place: '장소 등록', 
                    checked: false
                },
                {
                    color: 'border-l-tag-red',
                    time: '4:30 PM ~ 9:30 PM',
                    content: '집 가기',
                    additional: '중간에 휴게소 들러서 저녁먹기!',
                    place: '장소 등록', 
                    checked: false
                }
            ]
        }
    ]);

    const handleCheckboxChange = (dayIndex: number, todoIndex: number) => {
        setSchedules(prevSchedules => {
            const updatedSchedules = prevSchedules.map((schedule, sIndex) => {
                if (sIndex !== dayIndex) {
                    return schedule;
                }
                const updatedTodos = schedule.todos.map((todo, tIndex) => {
                    if (tIndex !== todoIndex) {
                        return todo;
                    }
                    return {
                        ...todo,
                        checked: !todo.checked
                    };
                });
                return {
                    ...schedule,
                    todos: updatedTodos
                };
            });
            return updatedSchedules;
        });
    };

    return (
        <>
            {status === 'page' ? (
                <div className='text-xl mb-16'>
                    {schedules.map((schedule, index) => {
                        return (
                            <div key={index} className='mb-8'>
                                <div key={`schcon${index}`} className='mb-3'>
                                    <span
                                        key={`schdaynum${index}`}
                                        className='mr-8 '
                                    >
                                        {index + 1}일차
                                    </span>
                                    <span key={`schdate${index}`}>
                                        {schedule.date}
                                    </span>
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
            ) : (
                <div>
                    {schedules.map((schedule, index) => (
                        <div className='mb-4' key={index}>
                            <div className='flex gap-4 text-grey mb-2'>
                                <span>{index + 1}일차</span>
                                <span>{schedule.date}</span>
                            </div>
                            {schedule.todos.map((todo, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center justify-between border border-lightgrey border-l-8 rounded-lg p-2 pl-7 mb-2 ${todo.color} ${todo.checked ? 'bg-lightgrey' : ''}`}
                                >
                                    <div>
                                        <div className='text-xs text-grey pb-2'>
                                            {todo.time}
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col'>
                                                <div>{todo.content}</div>
                                                <div className='text-grey'>
                                                    {todo.additional}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    {status === 'modal2' && ( // modal2일 때 체크박스
                                        <div className='flex items-center'>
                                            <input
                                                type='checkbox'
                                                className='mr-2'
                                                checked={todo.checked}
                                                onChange={() => handleCheckboxChange(index, idx)} // 해당 스케줄의 체크박스가 체크되면 상태 업데이트 함수 호출
                                            />
                                        </div>
                                    )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
