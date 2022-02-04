import React from 'react'
import { Layout, Image } from 'antd';
import { Logo } from '../../../../assets/images'
import './style.css'

const { Header } = Layout;

const HeaderComponent = ({ }) => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#222021' }}>
            <div className="logoText">Dummy Website</div>
            {/* <Image src={Logo} preview={false} width={10} height={60} /> */}
        </Header>
    )
}

export default HeaderComponent