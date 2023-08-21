import { Server } from '../setting';
import {
    IBagReturnType,
    IPlanBagListReturntype,
    IBagAndMaterialReturnType,
    ICityMaterialReturnType
} from './types';

// 여행 가방 목록 불러오기
export const getTravelBagList = async () => {
    const uid = localStorage.getItem('uid');
    const result = await Server.get<IBagReturnType[]>(
        `treavel-bag/user/bag/${uid}`
    );
    return result.data;
};

// 여행가방 만들기
export const makeNewTravelBag = async (pid: number, bagname: string) => {
    const uid = localStorage.getItem('uid');
    const result = await Server.post(`treavel-bag/user/bag/${uid}/${pid}`, {
        bagname
    });
    return result.data;
};

// 특정 계획에 속한 가방 리스트와 준비물 불러오기
export const getBagAndMaterialList = async (pid: number) => {
    const result = await Server.get<IBagAndMaterialReturnType[]>(
        `travel-bag/user/bag/material/${pid}`
    );
    return result.data;
};

// 여행지별 준비물 불러오기
export const getCityMateriallList = async (cid: number) => {
    const result = await Server.get<ICityMaterialReturnType[]>(
        `travel-bag/material/${cid}`
    );
    return result.data;
};

// 가방 내부에 메모 작성
export const writeBagMemo = async (bid: number, memo: string) => {
    const result = await Server.post(`travel-bag/bag/memo/${bid}`, { memo });
    return result.data;
};

// 가방 내부에 준비물 추가
export const addMaterial = async (bid: number, material: string) => {
    // const uid = localStorage.getItem('uid');
    const result = await Server.post(`travel-bag/bag/material/${bid}`, {
        material
    });
    return result.data;
};

// 가방 내부에 준비물 이름 수정
export const editMaterialName = async (mid: number, newName: string) => {
    const result = await Server.put(`travel-bag/bag/material/${mid}`, {
        material: newName
    });
    return result.data;
};

// 가방 준비물 삭제
export const deleteMaterial = async (mid: number) => {
    const result = await Server.delete(`travel-bag/bag/material/${mid}`);
    return result.data;
};

// 가방의 준비물 체크표시 상태 변경
export const changeCheckMaterial = async (bid: number, mid: number) => {
    const result = await Server.post(`travel-bag/material/check/${bid}/${mid}`);
    return result.data;
};

// 일정에 해당하는 가방 모두 불러오기
export const getPlanBagList = async (pid: number) => {
    const result = await Server.get<IPlanBagListReturntype[]>(
        `travel-bag/user/plan/bag/${pid}`
    );
    return result.data;
};
