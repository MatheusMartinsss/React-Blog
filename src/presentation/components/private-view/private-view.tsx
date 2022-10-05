import React from 'react'
import { useUser } from '../../../domain/context/user-context'
type Props = {
    children?: React.ReactNode
    roles: any[]
    
};
const PrivateView: React.FC<Props> = ({ children, roles }) => {
    const { getCurrentUser } = useUser()
    return roles.includes(getCurrentUser()?.role) ?
        <React.Fragment>
            {children}
        </React.Fragment> : <></>
}
export default PrivateView