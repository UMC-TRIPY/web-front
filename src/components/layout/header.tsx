'use client';

import { isLoggedInState } from '@/states/user';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import LoginModal from '../modal/LoginModal';
import ScheduleAddModal from '../modal/ScheduleAddModal';
import ScheduleDeleteModal from '../modal/ScheduleDeleteModal';
import ScheduleDetailModal from '../modal/ScheduleDetailModal';

interface MenuProps {
    menu: string;
    select: boolean;
    index: number;
    onClick: (index: number) => void;
}

let count = 0;

export default function Header() {
    // 로그인, 로그아웃 상태구현
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        if (!isModal) {
            setIsLogin(false);
            setIsSignUp(false);
        }
    }, [isModal]);

    // 일정 추가 모달 테스트용. 스케줄 페이지로 이동 필요.
    const [isScheduleAddModal, setIsScheduleAddModal] = useState(false);

    // 일정 삭제 모달 테스트용. 스케줄 페이지로 이동 필요.
    const [isScheduleDeleteModal, setIsScheduleDeleteModal] = useState(false);

    // 일정 상세보기 모달 테스트용. 일정 등록 페이지로 이동 필요.
    const [isScheduleDetailModal, setIsScheduleDetailModal] = useState(false);

    const addSchedule = () => {
        // setIsScheduleAddModal(true);
        // setIsScheduleDeleteModal(true);
        setIsScheduleDetailModal(true);
    };

    const handleLogin = () => {
        // 마이페이지 API 테스트용.
        setIsModal(true);
        setIsLogin(true);
        // setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        setIsModal(true);
        setIsSignUp(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    // 메뉴바 선택항목 상태구현
    const [menus, setMenus] = useState<[string, boolean][]>([
        ['여행정보', false],
        ['일정관리', false],
        ['여행가방', false],
        ['커뮤니티', false],
        ['모아보기', false],
        ['이용안내', false]
    ]);

    const Menu = ({ menu, select, index, onClick }: MenuProps) => {
        return (
            <div className='relative flex flex-col items-center'>
                {select && (
                    <img
                        className='absolute top-0 transform -translate-y-full'
                        src='/images/selected.png'
                        alt='none'
                    />
                )}
                <span
                    className={
                        select
                            ? 'font-bold hover:cursor-pointer'
                            : 'hover:cursor-pointer'
                    }
                    onClick={() => onClick(index)}
                >
                    {menu}
                </span>
            </div>
        );
    };

    const menuClick = (selectedIndex: number) => {
        const updatedMenus: [string, boolean][] = menus.map((menu, index) => [
            menu[0],
            index === selectedIndex
        ]);
        if (selectedIndex === 0) router.push('/info');
        if (selectedIndex === 1) router.push('/schedule');
        if (selectedIndex === 2) router.push('/mybag');
        if (selectedIndex === 3) router.push('/community');
        if (selectedIndex === 4) router.push('/summary');
        setMenus(updatedMenus);
    };

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) setIsLoggedIn(true);
        else {
            setIsLoggedIn(false);
            router.push('/');
        }
    });

    return (
        <header className='x-0 top-0 z-50 left-0 w-full bg-white border-b border-gray-300'>
            <div className='container mx-auto my-0.5 h-24 flex justify-between flex-wrap p-5'>
                <div className='flex space-x-16'>
                    <Link href='/' className='flex'>
                        <img
                            className='w-120'
                            src='/images/logo1.svg'
                            alt='트리피 로고'
                        />
                    </Link>
                    <nav className='flex items-center space-x-8'>
                        {menus.map((menu, index) => (
                            <Menu
                                key={`menu${index}`}
                                menu={menu[0]}
                                select={menu[1]}
                                index={index}
                                onClick={menuClick}
                            />
                        ))}
                    </nav>
                </div>
                <div className='flex items-center space-x-6'>
                    {isLoggedIn ? (
                        <>
                            <Link href='/mypage'>마이페이지</Link>
                            <button
                                onClick={handleLogout}
                                className='focus:outline-none'
                            >
                                로그아웃
                            </button>
                            <Link href='/'>
                                <img
                                    className='w-12 h-12'
                                    src='/images/user.svg'
                                    alt='프로필 사진'
                                />
                            </Link>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleLogin}
                                className='focus:outline-none'
                            >
                                로그인
                            </button>
                            {/* <Link href='/' onClick={addSchedule}>
                                회원가입
                            </Link> */}
                            <button onClick={handleSignUp}>회원가입</button>
                        </>
                    )}
                </div>
            </div>
            {isModal && (isLogin || isSignUp) && (
                <LoginModal
                    setIsModal={setIsModal}
                    setIsLogin={setIsLogin}
                    setIsSignUp={setIsSignUp}
                    setIsLoggedIn={setIsLoggedIn}
                    title={isLogin ? '로그인' : '회원가입'}
                />
            )}
            {/* {isScheduleAddModal && (
                <ScheduleAddModal setIsModal={setIsScheduleAddModal} />
            )} */}
            {/* {isScheduleDeleteModal && (
                <ScheduleDeleteModal setIsModal={setIsScheduleDeleteModal} />
            )} */}
            {isScheduleDetailModal && (
                <ScheduleDetailModal setIsModal={setIsScheduleDetailModal} />
            )}
        </header>
    );
}
