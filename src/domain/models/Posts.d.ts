export type PostContextType = {
    posts: IPost[]
    addPost: (post: IPost) => void
    updatePost: (id: string, body: object) => boolean
}
export interface IPost {
    id: number;
    tittle: string;
    description: string;
    text?: string;
    image?: string;
    date?: string;
}
