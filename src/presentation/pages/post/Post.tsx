import React from 'react'
import { Grid } from '@mui/material'
import MainLayout from '../../components/layout/main-layout'
import { useParams } from 'react-router-dom'
const Post: React.FC = () => {
    const { id } = useParams()
    return (
        <MainLayout>
            <Grid container spacing={2}>

            </Grid>
        </MainLayout>

    )
}
export default Post