import { Server } from "../setting";
import { PostsProps } from "./types";

/** 게시글 정보 몽땅 가져오기 */
export const getPost = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data;
}

/** 유저 닉네임 가져오기 */
export const getUserNickname = async (userId: number) => {
    const result = await Server.get(`/mypage/user/${userId}`);
    return result.data.nickname;
};

export const getUserIndex = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].user_index;
};

export const getPostTitle = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].post_title; 
};

export const getPostContent = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].post_content; 
};

export const getCityIndex = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].city_index;
};

export const getViews = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].view;
};

export const getThumbs = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].thumbs;
};

export const getCreatedAt = async (postId: string) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].created_at;
};

export const getTags = async (postId: number) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].tags; 
};

export const getPostImage = async (postId: number) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].post_image; 
};

export const getPostFile = async (postId: number) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].post_file; 
};

export const getPlanIndex = async (postId: number) => {
    const result = await Server.get(`/posts/${postId}`);
    return result.data[0].plan_index;
};