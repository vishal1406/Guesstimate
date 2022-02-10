import React, { Component } from 'react'
import { HomeComponent } from '../components'
import { lettersList } from '../../../shared/constants'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowIndex: 0,
            boardState: ["","","","","",""],
            currentRowEvaluation: [],
            totalEvaluation: [],
            solution:"pause",
            maxLength: 5,
            currentWord: ""
        }

        this.bind();
    }

    bind(){
        this.handleKeyPress = this.handleKeyPress.bind( this );
        this.handleEnter = this.handleEnter.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind( this );
    }

    componentDidMount = () => {
        // For tracking of each key-stroke
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        // Removing event listener
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter( event ) {
        console.log( "enter pressed ");
    }

    handleDelete ( event ){
        console.log( "delete pressed");
    }

    handleChange ( event ){
        console.log(event.key);

        let value = this.state.currentWord;
        if( value.length < this.state.maxLength ) {
              value+=event.key;
              this.setState({ currentWord: value });
        }else{
            console.log("max length reached");
        }

    }
    handleKeyPress = (event) => {
        if (event.keyCode === 8) {
            this.handleDelete(event);
        } else if (event.keyCode === 13) {
            this.handleEnter( event );
        } else if (lettersList.includes(event.key)) {
            this.handleChange(event);
        }
    }

    handleClick = (key) => {
        console.log(key)
    }

    render() {
        
        return (
            <HomeComponent
                {...this.state}
                handleClick={this.handleClick} />
        )
    }
}

export default HomeContainer