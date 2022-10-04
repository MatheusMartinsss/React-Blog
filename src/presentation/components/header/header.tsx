import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button, Stack, Avatar } from '@mui/material'
import { MenuOptions } from './menuItems'
const Header: React.FC = () => {
    const [logged, setLogged] = React.useState<boolean>(false)
    const auth = () => setLogged((old) => !old)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='default'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Stack direction='row' spacing={2} >
                        {MenuOptions.map(({ label, key }) => (
                            <Typography key={key} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {label}
                            </Typography>
                        ))}
                    </Stack>
                    {logged ? (
                        <Stack direction='row'>
                            <Button onClick={auth} color="inherit">logout</Button>
                            <Avatar />
                        </Stack>
                    ) : (
                        <Stack direction='row'>
                            <Button onClick={auth} color="inherit">Login</Button>
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;