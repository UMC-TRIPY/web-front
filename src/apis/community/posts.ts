import { Server } from "../setting";

export interface PostsProps {
    user_index: number;
    post_title: string;
    post_content: string;
    city_index: number;
    tags: string[];
    post_image: string;
    post_file: string;
    plan_index: number;
}

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