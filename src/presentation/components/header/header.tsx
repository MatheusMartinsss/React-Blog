import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Stack, IconButton } from '@mui/material'
import { MenuOptions } from './menuItems'
import { useUser } from '../../../domain/context/user-context'
import { IUser } from '../../../domain/models'
import { Logout } from '@mui/icons-material/';
const Header: React.FC = () => {
    const user: IUser = {
        id: 1,
        name: 'admin',
        role: 'admin'
    }
    const { getCurrentUser, setLoggedUser, logoutUser } = useUser()
    const auth = () => setLoggedUser(user)
    const logout = () => logoutUser()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='default'>
                <Toolbar sx={{ justifyContent: 'space-between', textAlign: 'center' }}>
                    <Stack direction='row' spacing={2} >
                        {MenuOptions.map(({ label, key, roles }, index) => {
                            if (!roles.length) {
                                return (
                                    <Typography key={index} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {label}
                                    </Typography>
                                )
                            }
                            if (roles.includes(getCurrentUser()?.role)) {
                                return (
                                    <Typography key={index} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        {label}
                                    </Typography>
                                )
                            }
                            return null
                        })}
                    </Stack>
                    <Stack direction='row'>
                        {getCurrentUser() ? (
                            <Typography variant="h5" component="div"  >
                                Olá, {getCurrentUser()?.name}
                                <IconButton onClick={logout} color="inherit">
                                    <Logout />
                                </IconButton>
                            </Typography>
                        ) : (
                            <Button onClick={auth} component='div' color="inherit">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Entrar
                                </Typography>
                            </Button>
                        )}
                    </Stack>

                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Header;