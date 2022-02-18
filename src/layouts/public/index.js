import React, { Fragment } from 'react'
import { Layout } from 'antd';
import {
    Route,
    Switch
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';
import { Footer } from '../../shared'

const PublicLayout = ({ }) => {
    return (
        <Fragment>
            <div style={{
                height: '10vh'
            }}>
            </div>
            <div style={{
                padding: '20px 50px 0px 50px',
                backgroundColor: "#F9FBFD",
                height: '80vh'
            }}>
                <Switch>
                    {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                </Switch>
            </div>
            <div style={{
                height: '10vh'
            }}>
                <Footer />
            </div>
        </Fragment>
    )
}

export default PublicLayout