
import React, { createContext, useState, useContext } from 'react'
import { IUserContextType, IUser } from '../models/'
type Props = {
    children?: React.ReactNode
};
export const AppCtx = createContext<IUserContextType>({} as IUserContextType);

const UserProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null)

    const getCurrentUser = () => user
    const setLoggedUser = (props: IUser) => setUser(props)
    const logoutUser = () => setUser(null)
    return <AppCtx.Provider value={{ getCurrentUser, setLoggedUser, logoutUser }}> {children} </AppCtx.Provider>
}

export const useUser = () => useContext(AppCtx)
export default UserProvider