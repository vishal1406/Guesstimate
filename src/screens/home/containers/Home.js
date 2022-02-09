import React, { Component } from 'react'
import { HomeComponent } from '../components'
import { lettersList } from '../../../shared/constants'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        // For tracking of each key-stroke
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        // Removing event listener
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        if (event.keyCode === 8) {
            console.log('You just pressed Delete')
        } else if (event.keyCode === 13) {
            console.log('You just pressed Delete')
        } else if (lettersList.includes(event.key)) {
            console.log('You just pressed a alphabet')
        }
    }

    render() {
        const { } = this.state
        return (
            <HomeComponent />
        )
    }
}

export default HomeContainer