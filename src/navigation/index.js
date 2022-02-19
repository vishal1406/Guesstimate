import React, { Component } from 'react'
import PrivateLayout from '../layouts/private';
import PublicLayout from '../layouts/public';
import history from '../utils/history';
class Navigation extends Component {

    constructor(props, context) {
        super(props)
    }

    componentDidMount = () => {
        history.push('/home')
    }

    render() {
        if (localStorage.getItem('sessionToken')) {
            return (
                <PrivateLayout />
            )
        }
        return (
            <PublicLayout />
        )
    }
}

export default Navigation