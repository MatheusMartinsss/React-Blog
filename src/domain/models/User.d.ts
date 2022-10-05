export type IUserContextType = {
    getCurrentUser: () => IUser | null
    setLoggedUser: (user: IUser) => void
    logoutUser: () => void
}
export interface IUser {
    id?: number;
    name?: string;
    role?: string;
}
