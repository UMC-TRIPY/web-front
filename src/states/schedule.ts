import { atom } from 'recoil';
import { v1 } from 'uuid';

export const planIDState = atom({
    key: `planIDState/${v1()}`,
    default: -1
});

export const scheduleState = atom({
    key: `scheduleMode/${v1()}`,
    default: false
});

export const labelScheduleListState = atom({
    key: `labelScheduleList/${v1()}`,
    default: [
        {
            date: '6월30일(토)',
            todos: [
                {
                    color: '#57CDFF',
                    time: '7:30 AM~8:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: 'F1963 전시회 티켓 오픈, 예매하기',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FF7F57',
                    time: '8:30 AM~1:00 PM',
                    content: '자차로 이동',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '1:00 PM~2:00 PM',
                    content: '점심',
                    additional: '',
                    place: '바릇',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '2:30 PM~4:30 PM',
                    content: '카페',
                    additional: '',
                    place: '힐튼 부산 호텔',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '5:00 PM~6:00 PM',
                    content: 'F1963',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#57CDFF',
                    time: '6:30 PM~7:30 PM',
                    content: '숙소 체크인 & 짐정리',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FFE457',
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
                    color: '#57CDFF',
                    time: '7:30 AM~8:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '9:00 AM ~ 10:00AM',
                    content: '아침',
                    additional: '',
                    place: '해목 해운대점',
                    checked: false
                },
                {
                    color: '#FFE457',
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
                    color: '#57CDFF',
                    time: '8:30 AM~9:30 AM',
                    content: '기상 및 숙소에서 출발',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '10:00 AM ~ 11:00 AM',
                    content: '아침',
                    additional: '',
                    place: '밀양순대돼지국밥 부산본점',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '11:15 AM ~ 11:30 AM',
                    content: '해운대',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#57CDFF',
                    time: '11:30 AM ~ 12:00 AM',
                    content: '나가하마만게츠 현장 테이블링',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '12:00 PM ~ 1:00 PM',
                    content: '점심',
                    additional: '',
                    place: '나가하마만게츠',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '1:30 PM ~ 2:30 PM',
                    content: '동백섬',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FFE457',
                    time: '3:30 PM ~ 4:30 PM',
                    content: '해리단길',
                    additional: '',
                    place: '장소 등록',
                    checked: false
                },
                {
                    color: '#FF7F57',
                    time: '4:30 PM ~ 9:30 PM',
                    content: '집 가기',
                    additional: '중간에 휴게소 들러서 저녁먹기!',
                    place: '장소 등록',
                    checked: false
                }
            ]
        }
    ]
});

export const BlockScheduleListState = atom({
    key: `blockScheduleList/${v1()}`,
    default: [
        {
            id: 1,
            column: 0,
            lineColor: '#57CDFF',
            color: '#EEFAFF',
            startTime: 3,
            halfHour: 2,
            title: '기상 및 숙소에서 출발'
        },
        {
            id: 2,
            column: 0,
            lineColor: '#FF7F57',
            color: '#FFF3EF',
            startTime: 5,
            halfHour: 9,
            title: '자차로 이동'
        },
        {
            id: 3,
            column: 0,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 14,
            halfHour: 2,
            title: '점심',
            location: '바릇'
        },
        {
            id: 4,
            column: 0,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 17,
            halfHour: 4,
            title: '카페',
            location: '힐튼 부산 호텔'
        },
        {
            id: 5,
            column: 0,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 22,
            halfHour: 2,
            title: 'F1963'
        },
        {
            id: 6,
            column: 0,
            lineColor: '#57CDFF',
            color: '#EEFAFF',
            startTime: 25,
            halfHour: 2,
            title: '숙소 체크인 & 짐정리'
        },
        {
            id: 7,
            column: 0,
            lineColor: '#57CDFF',
            color: '#EEFAFF',
            startTime: 27,
            halfHour: 2,
            title: '저녁',
            location: '부산 해운대 시장'
        },
        {
            id: 8,
            column: 1,
            lineColor: '#57CDFF',
            color: '#EEFAFF',
            startTime: 3,
            halfHour: 2,
            title: '기상 및 숙소에서 출발'
        },
        {
            id: 9,
            column: 1,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 6,
            halfHour: 2,
            title: '아침',
            location: '해목 해운대점'
        },
        {
            id: 10,
            column: 1,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 9,
            halfHour: 20,
            title: '부산 롯데월드',
            location: '부산 롯데월드'
        },
        {
            id: 11,
            column: 2,
            lineColor: '#57CDFF',
            color: '#EEFAFF',
            startTime: 5,
            halfHour: 2,
            title: '기상 및 숙소에서 출발'
        },
        {
            id: 12,
            column: 2,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 8,
            halfHour: 2,
            title: '아침',
            location: '밀양순대돼지국밥 부산본점'
        },
        {
            id: 13,
            column: 2,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 10,
            halfHour: 1,
            title: '해운대',
            location: '해운대'
        },
        {
            id: 14,
            column: 2,
            lineColor: '#57CDFF',
            color: '#EEFAFF',
            startTime: 11,
            halfHour: 1,
            title: '나가하마만게츠 현장 테이블링'
        },
        {
            id: 15,
            column: 2,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 12,
            halfHour: 2,
            title: '점심',
            location: '나가하마만게츠'
        },
        {
            id: 16,
            column: 2,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 15,
            halfHour: 2,
            title: '동백섬',
            location: '동백섬'
        },
        {
            id: 17,
            column: 2,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 19,
            halfHour: 2,
            title: '해리단길',
            location: '해리단길'
        },
        {
            id: 18,
            column: 2,
            lineColor: '#FFE457',
            color: '#FFFBE7',
            startTime: 21,
            halfHour: 10,
            title: '집 가기'
        }
    ]
});
