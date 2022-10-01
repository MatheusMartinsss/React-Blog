import React from 'react'
import { Layout, Menu, } from 'antd'
import { MenuOptions } from './menuItems'
const { Header: Heade } = Layout

const Header: React.FC = () => {
    return (
        <Heade style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
        }}>
            <Menu
                theme='dark'
                mode='horizontal'
                items={MenuOptions}
            />
        </Heade>
    )
}

export default Header;