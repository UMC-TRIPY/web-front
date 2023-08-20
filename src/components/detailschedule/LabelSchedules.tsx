import { labelScheduleListState } from '@/states/schedule';
import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { useRecoilState } from 'recoil';

interface ILabelScheduleProps {
    status: 'page' | 'modal' | 'modal2';
}

export default function LabelSchedules({ status }: ILabelScheduleProps) {
    const [schedules, setSchedules] = useRecoilState(labelScheduleListState);

    const handleCheckboxChange = (dayIndex: number, todoIndex: number) => {
        setSchedules((prevSchedules) => {
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
                                            className='border border-lightgrey border-l-8 rounded-lg pl-9 mb-2'
                                            style={{
                                                borderLeftColor: todo.color
                                            }}
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
                                    className={`flex items-center justify-between border border-lightgrey border-l-8 rounded-lg p-2 pl-7 mb-2 ${
                                        todo.color
                                    } ${todo.checked ? 'bg-lightgrey' : ''}`}
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
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            index,
                                                            idx
                                                        )
                                                    } // 해당 스케줄의 체크박스가 체크되면 상태 업데이트 함수 호출
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
