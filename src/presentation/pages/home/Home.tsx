import React from 'react'
import PostCard from '../../components/postcard/post-card'
import { Grid } from '@mui/material'
import MainLayout from '../../components/layout/main-layout'
const Home: React.FC = () => {
    return (
        <MainLayout>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <PostCard
                        tittle='Novo Post'
                        description='Post de teste'
                    />
                </Grid>
            </Grid>
        </MainLayout>

    )
}
export default Home