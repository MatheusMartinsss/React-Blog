
import React, { createContext, useState, useContext } from 'react'
import { IUserContextType, IUser } from '../models/'
type Props = {
    children?: React.ReactNode
};
export const AppCtx = createContext<IUserContextType | null>(null);

const PostsProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser>({})

    const authUser = (props: IUser) => {
        return setUser(props)
    }
    const logoutUser = () => {
        return setUser({})
    }
    return <AppCtx.Provider value={{ user, authUser, logoutUser }}> {children} </AppCtx.Provider>
}

export const usePosts = () => {
    const context = useContext(AppCtx)
    return context
}
export default PostsProvider