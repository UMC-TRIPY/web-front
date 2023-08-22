import { checkSchedules } from '@/apis/travellists/check';
import { addDays, differenceInDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { formatAMPM } from '@/utils/dateUtil';
import { tableToDate } from '@/utils/dateUtil';

interface ILabelScheduleProps {
    status: 'page' | 'modal' | 'modal2';
}

export default function LabelSchedules({ status }: ILabelScheduleProps) {
    const [schedules, setSchedules] = useState<any>();
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const color = ['#FFE457', '#57CDFF', '#FF7F57'];
    const handleCheckboxChange = (dayIndex: number, todoIndex: number) => {
        setSchedules((prevSchedules: any) => {
            const updatedSchedules = prevSchedules.map(
                (schedule: any, sIndex: number) => {
                    if (sIndex !== dayIndex) {
                        return schedule;
                    }
                    const updatedTodos = schedule.todos.map(
                        (todo: any, tIndex: number) => {
                            if (tIndex !== todoIndex) {
                                return todo;
                            }
                            return {
                                ...todo,
                                checked: !todo.checked
                            };
                        }
                    );
                    return {
                        ...schedule,
                        todos: updatedTodos
                    };
                }
            );
            return updatedSchedules;
        });
    };

    useEffect(() => {
        let tmp: any[] = [];
        const date: any = sessionStorage.getItem('date')?.split('~');
        const s = date[0];
        const e = date[1].split(' ')[1];
        const start = new Date(s);
        const d = differenceInDays(new Date(e), start);

        for (let i = 0; i <= d; i++) {
            const today = new Date(addDays(start, i));
            tmp.push({
                date: `${today.getMonth() + 1}월 ${today.getDate()}일(${
                    week[today.getDay()]
                })`,
                todos: []
            });
        }
        checkSchedules(Number(sessionStorage.getItem('pid')))
            .then((res) => {
                res.map((r: any, idx: number) => {
                    const today = new Date(r.plan_date.slice(0, 10));
                    tmp[differenceInDays(today, start)].todos.push({
                        color: color[Number(r.plan_color) - 1],
                        startTime: Number(r.start_time.slice(6)),
                        halfHour: r.plan_halfHour,
                        content: r.plan_title,
                        additional:
                            r.plan_memo === undefined ? '' : r.plan_memo,
                        place:
                            r.plan_place === undefined
                                ? '장소 등록'
                                : r.plan_place,
                        checked: false
                    });
                });
                setSchedules(tmp);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {status === 'page' ? (
                <div className='text-xl mb-16'>
                    {schedules === undefined
                        ? ''
                        : schedules.map((schedule: any, index: number) => {
                              return (
                                  <div key={index} className='mb-8'>
                                      <div
                                          key={`schcon${index}`}
                                          className='mb-3'
                                      >
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
                                      {schedule.todos.length === 0
                                          ? '일정이 없습니다.'
                                          : schedule.todos.map(
                                                (todo: any, idx: number) => {
                                                    return (
                                                        <div
                                                            key={`schwrap${idx}`}
                                                            className='border border-lightgrey border-l-8 rounded-lg pl-9 mb-2'
                                                            style={{
                                                                borderLeftColor:
                                                                    todo.color
                                                            }}
                                                        >
                                                            <div
                                                                key={`schtime${idx}`}
                                                                className='text-xs text-grey py-2.5'
                                                            >
                                                                {formatAMPM(
                                                                    tableToDate(
                                                                        todo.startTime
                                                                    )
                                                                )}{' '}
                                                                ~{' '}
                                                                {formatAMPM(
                                                                    tableToDate(
                                                                        todo.startTime +
                                                                            todo.halfHour
                                                                    )
                                                                )}
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
                                                                        {
                                                                            todo.content
                                                                        }
                                                                    </div>
                                                                    <div
                                                                        key={`schadd${idx}`}
                                                                        className='text-grey'
                                                                    >
                                                                        {
                                                                            todo.additional
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='flex text-base items-center'>
                                                                    <CiLocationOn
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                    <span className='ml-2 mr-4'>
                                                                        {
                                                                            todo.place
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                  </div>
                              );
                          })}
                </div>
            ) : (
                <div>
                    {schedules === undefined
                        ? ''
                        : schedules.map((schedule: any, index: number) => (
                              <div className='mb-4' key={index}>
                                  <div className='flex gap-4 text-grey mb-2'>
                                      <span>{index + 1}일차</span>
                                      <span>{schedule.date}</span>
                                  </div>
                                  {schedule.todos.map(
                                      (todo: any, idx: number) => (
                                          <div
                                              key={idx}
                                              className='flex items-center justify-between border border-lightgrey border-l-8 rounded-lg p-2 pl-7 mb-2'
                                              style={{
                                                  borderLeftColor: todo.color,
                                                  backgroundColor: todo.checked
                                                      ? '#E5E5E5'
                                                      : ''
                                              }}
                                          >
                                              <div>
                                                  <div className='text-xs text-grey pb-2'>
                                                      {formatAMPM(
                                                          tableToDate(
                                                              todo.startTime
                                                          )
                                                      )}{' '}
                                                      ~{' '}
                                                      {formatAMPM(
                                                          tableToDate(
                                                              todo.startTime +
                                                                  todo.halfHour
                                                          )
                                                      )}
                                                  </div>
                                                  <div className='flex justify-between'>
                                                      <div className='flex flex-col'>
                                                          <div>
                                                              {todo.content}
                                                          </div>
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
                                                              checked={
                                                                  todo.checked
                                                              }
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
                                      )
                                  )}
                              </div>
                          ))}
                </div>
            )}
        </>
    );
}
