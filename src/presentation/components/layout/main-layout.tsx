import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer';
import { Container } from '@mui/material';
type Props = {
    children?: React.ReactNode
};
const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <React.Fragment >
            <Header />
            <Container sx={{ padding: '24px' }} >
                {children}
            </Container>
            <Footer />
        </React.Fragment>
    )
}
export default MainLayout;