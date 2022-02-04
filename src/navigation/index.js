import React, { Component } from 'react'
import PrivateLayout from '../layouts/private';
import PublicLayout from '../layouts/public';

class Navigation extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            isUserLoggedIn: localStorage.getItem('sessionToken') ? true : false
        }
    }

    render() {
        let { isUserLoggedIn } = this.state
        if (isUserLoggedIn) {
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