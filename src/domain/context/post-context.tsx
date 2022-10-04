
import React, { createContext, useState, useContext } from 'react'
import { PostContextType, IPost } from '../models/'
type Props = {
    children?: React.ReactNode
};
export const AppCtx = createContext<PostContextType | null>(null);

const PostsProvider: React.FC<Props> = ({ children }) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const addPost = (post: IPost) => {
        const newPost: IPost = {
            id: posts.length,
            tittle: post.tittle,
            description: post.description,
            text: post.text,
            image: post.image,
            date: post.date
        }
        setPosts((old) => [...old, newPost])
    }
    const updatePost = (id: string, body: object) => {
        return true
    }
    return <AppCtx.Provider value={{ posts, addPost, updatePost }}> {children} </AppCtx.Provider>
}

export const usePosts = () => {
    const context = useContext(AppCtx)
    return context
}
export default PostsProvider