import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardHeader, Box } from '@mui/material'
import { IPost } from '../../../domain/models'

const PostCard: React.FC<IPost> = ({ id, image, tittle, description, date }) => {
    return (
        <Card
            variant='outlined'
            sx={{ display: 'flex', padding: '5px 0 5px 0px', }}
            key={id}
        >
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <Box flexDirection='column'>
                <CardHeader
                    title={tittle}
                    subheader={date}
                />
                <CardContent>
                    <Typography variant='body2' color="text.secondary">{description}</Typography>
                </CardContent>
            </Box>
        </Card >
    )
}
export default PostCard;