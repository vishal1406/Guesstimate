import React from 'react'
import { Header, Footer } from '../../shared'
import { Layout } from 'antd';
import {
    Route,
    BrowserRouter,
    Routes,
} from 'react-router-dom'
import { privateRoutes } from '../../navigation/routes';

const { Content } = Layout;

// private view
const PrivateLayout = ({ }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Content
                style={{
                    padding: '70px 50px 0px 50px',
                    backgroundColor: "#F9FBFD",
                    minHeight: '82vh'
                }}
            >
                <BrowserRouter>
                    <Routes>
                        {privateRoutes && privateRoutes.map((item, index) => <Route key={index} exact path={item.path} element={item.component} />)}
                    </Routes>
                </BrowserRouter>
            </Content>
            <Footer />
        </Layout>
    )
}

export default PrivateLayout