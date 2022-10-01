import React from 'react'
import { Layout, Menu, } from 'antd'
import { MenuOptions } from './menuItems'
const { Header: Heade } = Layout

const Header: React.FC = () => {
    return (
        <Heade>
            <Menu
                theme='dark'
                mode='horizontal'
                items={MenuOptions}
                defaultSelectedKeys={['1']}
            >

            </Menu>
        </Heade>
    )
}

export default Header;