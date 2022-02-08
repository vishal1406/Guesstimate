import React, { Component } from 'react'
import PrivateLayout from '../layouts/private';
import PublicLayout from '../layouts/public';

class Navigation extends Component {

    constructor(props, context) {
        super(props)
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