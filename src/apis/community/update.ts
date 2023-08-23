import { Server } from '../setting';
import { PostsProps } from './posts';

export const updatePosts = async (posts: PostsProps) => {
    await Server.post<PostsProps>(`/posts`, posts)
        .then((res: any) => {
            console.log(res);
            typeof window! == 'undefined'
                ? sessionStorage.setItem('user_index', res.data.user_index)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('post_title', res.data.post_title)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('post_content', res.data.post_content)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('city_index', res.data.city_index)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('tags', res.data.tags)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('post_image', res.data.post_image)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('post_file', res.data.post_file)
                : null;
            typeof window! == 'undefined'
                ? sessionStorage.setItem('plan_index', res.data.plan_index)
                : null;
        })
        .catch((err) => console.log(err));
};
