import React, { Fragment } from 'react'
import { Layout } from 'antd';
import {
    Route,
    Switch
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';
import { Header, Footer, Toast } from '../../shared'

const PublicLayout = ({ }) => {
    return (
        <Fragment>
            <div style={{
            }}>
                <Header />
            </div>
            <div style={{
                padding: '20px 50px 0px 50px',
                backgroundColor: "#F9FBFD",
                height: '100vh'
            }}>
                <Switch>
                    {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                </Switch>
            </div>
            <div style={{
                height: '6vh'
            }}>
                <Footer />
            </div>
            <Toast />
        </Fragment>
    )
}

export default PublicLayout