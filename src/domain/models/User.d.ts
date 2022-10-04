export type IUserContextType = {
    user: IUser
    authUser: (user: IUser) => void
    logoutUser: () => void
}
export interface IUser {
    id?: number;
    name?: string;
    role?: string;
}
