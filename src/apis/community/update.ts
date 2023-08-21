import { Server } from "../setting";
import { PostsProps } from "./posts";

export const updatePosts = async (posts: PostsProps) => {
    await Server.post<PostsProps>(`/posts`, posts)
        .then((res: any) => {
            console.log(res);
            
        })
        .catch((err) => console.log(err));
};