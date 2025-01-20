import React, { Fragment } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';
import { Header, Footer, Toast } from '../../shared'

const PublicLayout = ({ }) => {
    return (
        <Fragment>
            <Header />
            <div style={{
                padding: '20px 50px 0px 50px',
                backgroundColor: "#F9FBFD",
            }}>
                <Switch>
                    {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} component={item.component} />)}
                </Switch>
            </div>
            <Footer />
            <Toast />
        </Fragment>
    )
}

export default PublicLayout