import React from 'react'
import { Layout } from 'antd';
import {
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';

const { Content } = Layout;

const PublicLayout = ({ }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                    padding: '70px 50px 0px 50px',
                    backgroundColor: "#F9FBFD",
                    minHeight: '82vh'
                }}
            >
                <BrowserRouter>
                    <Routes>
                        {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} element={item.component} />)}
                    </Routes>
                </BrowserRouter>
            </Content>
        </Layout>
    )
}

export default PublicLayout