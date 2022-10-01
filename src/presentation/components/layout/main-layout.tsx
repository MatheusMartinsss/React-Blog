import React from 'react'
import { Layout } from 'antd'
import Header from '../header/header'
import Footer from '../footer/footer';
import "./layout.css"
const { Content } = Layout
type Props = {
    children?: React.ReactNode
};
const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <Layout style={{
            minHeight: '100vh'
        }}>
            <Header />
            <Content  style={{
                padding: '0 50px',
            }} >
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}
export default MainLayout;