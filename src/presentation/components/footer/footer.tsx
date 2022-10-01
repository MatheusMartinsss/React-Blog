import React from 'react'
import { Layout } from 'antd'
const { Footer: Foote } = Layout
const Footer: React.FC = () => {
    return (
        <Foote
            style={{
                textAlign: 'center',
            }}
        >
            Footer
        </Foote>
    )
}
export default Footer