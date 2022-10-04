import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const Footer: React.FC = () => {
    return (
        <Container maxWidth='lg'>
            <Box justifyContent='center' textAlign='center'>
                <Typography variant="caption" display="block" gutterBottom>
                    Copyright @
                </Typography>
            </Box>
        </Container>
    )
}
export default Footer