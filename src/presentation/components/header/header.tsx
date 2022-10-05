import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Stack } from '@mui/material'
import { MenuOptions } from './menuItems'
import { useUser } from '../../../domain/context/user-context'
import { IUser } from '../../../domain/models'
const Header: React.FC = () => {
    const user: IUser = {
        id: 1,
        name: 'teste',
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
                        {MenuOptions.map(({ label, key }) => (
                            <Typography key={key} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {label}
                            </Typography>
                        ))}
                    </Stack>
                    {getCurrentUser() ? (
                        <Stack direction='row' spacing={2} textAlign = 'center'>
                            <Typography variant="h6" component="div" >
                                Olá, {getCurrentUser()?.name}
                            </Typography>
                            <Button onClick={logout} color="inherit">Logout</Button>
                        </Stack>
                    ) : (
                        <Stack direction='row' spacing={2}>
                            <Button onClick={auth} color="inherit">Login</Button>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;