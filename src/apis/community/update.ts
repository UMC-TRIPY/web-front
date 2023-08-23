import { Server } from '../setting';
import { PostsProps } from './posts';

export const updatePosts = async (posts: PostsProps) => {
    await Server.post<PostsProps>(`/posts`, posts)
        .then((res: any) => {
            console.log(res);
            typeof window! == 'undefined'
                ? localStorage.setItem('user_index', res.data.user_index)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('post_title', res.data.post_title)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('post_content', res.data.post_content)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('city_index', res.data.city_index)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('tags', res.data.tags)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('post_image', res.data.post_image)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('post_file', res.data.post_file)
                : null;
            typeof window! == 'undefined'
                ? localStorage.setItem('plan_index', res.data.plan_index)
                : null;
        })
        .catch((err) => console.log(err));
};
