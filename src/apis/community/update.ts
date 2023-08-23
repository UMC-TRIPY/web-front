import { Server } from "../setting";
import { PostsProps } from "./posts";

export const updatePosts = async (posts: PostsProps) => {
    await Server.post<PostsProps>(`/posts`, posts)
        .then((res: any) => {
            console.log(res);
            sessionStorage.setItem('user_index', res.data.user_index);
            sessionStorage.setItem('post_title', res.data.post_title);
            sessionStorage.setItem('post_content', res.data.post_content);
            sessionStorage.setItem('city_index', res.data.city_index);
            sessionStorage.setItem('tags', res.data.tags);
            sessionStorage.setItem('post_image', res.data.post_image);
            sessionStorage.setItem('post_file', res.data.post_file);
            sessionStorage.setItem('plan_index', res.data.plan_index);
        })
        .catch((err) => console.log(err));
};