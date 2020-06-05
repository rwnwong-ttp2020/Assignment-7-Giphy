import React, { Component } from 'react'
import axios from "axios"
import Search from './Search'


class Giphy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            word: "",
            gifs: [],
                         
        };
    }
    
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Giphy
