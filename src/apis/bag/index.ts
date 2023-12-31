import { Server } from '../setting';
import {
    IBagReturnType,
    IPlanBagListReturntype,
    IBagAndMaterialReturnType,
    ICityMaterialReturnType
} from './types';

// 여행 가방 목록 불러오기
export const getTravelBagList = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    const result = await Server.get<IBagReturnType[]>(
        `travel-bag/user/bag/${uid}`
    );
    return result.data;
};

// 여행가방 만들기
export const makeNewTravelBag = async (pid: number, bagname: string) => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    const result = await Server.post(`travel-bag/user/bag/${uid}/${pid}`, {
        bagname
    });
    console.log('makeNewTravelBag:', result.data);
    return result.data.bag_index;
};

// 특정 계획에 속한 가방 리스트와 준비물 불러오기
export const getBagAndMaterialList = async (pid: number) => {
    const result = await Server.get<IBagAndMaterialReturnType[]>(
        `travel-bag/user/bag/material/${pid}`
    );
    return result.data;
};

// 여행지별 준비물 불러오기
export const getCityMateriallList = async (cname: string) => {
    const result = await Server.get<ICityMaterialReturnType[]>(
        `travel-bag/materialname/${cname}`
    );

    return result.data;
};

// 가방 내부에 메모 작성
export const writeBagMemo = async (bag_id: number, memo: string) => {
    const result = await Server.post(`travel-bag/bag/memo/${bag_id}`, { memo });
    console.log('메모작성:', result.data);
    return result.data;
};

// 가방 내부 메모 조회
export const getBagMemo = async (bag_id: number) => {
    const result = await Server.get(`travel-bag/user/bag/memo/${bag_id}`);
    console.log('메모조회:', result.data);
    return result.data[0].bag_memo;
};

// 가방 내부에 준비물 추가
export const addMaterial = async (bag_id: number, material: string) => {
    const result = await Server.post(`travel-bag/bag/material/${bag_id}`, {
        material
    });
    console.log('addMaterial:', result.data);
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
export const deleteMaterial = async (bag_id: number, mid: number) => {
    const result = await Server.delete(
        `travel-bag/bag/material/${bag_id}/${mid}`
    );
    console.log('deleteMaterial:', result);
    return result.data;
};

// 가방의 준비물 체크표시 상태 변경
export const changeCheckMaterial = async (bag_id: number, mid: number) => {
    const result = await Server.post(
        `travel-bag/material/check/${bag_id}/${mid}`
    );
    return result.data;
};

// 일정에 해당하는 가방 모두 불러오기
export const getPlanBagList = async (pid: number) => {
    const result = await Server.get<IPlanBagListReturntype[]>(
        `travel-bag/user/plan/bag/${pid}`
    );
    return result.data;
};

export const getTravelPlanList = async () => {
    // const uid = localStorage.getItem('uid');
    const uid = 2;
    const result = await Server.get(`travel-plans/user/plans/${uid}`);
    return result.data;
};

/**
 * pid로 일정에 해당하는 가방 모두 불러오기
 * @param {number} pid
 */
export const getScheduleTravelBagList = async (pid: number) => {
    const result = await Server.get<IBagReturnType[]>(
        `travel-bag/user/plan/bag/${pid}`
    );
    return result.data;
};

/**
 * 가방에 해당하는 준비물 조회
 * @param {number} bag_id
 */
export const getTravelBagMaterialList = async (bag_id: number) => {
    const result = await Server.get(`travel-bag/user/bag/materials/${bag_id}`);
    return result.data;
};
