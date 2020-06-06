import React, { Component } from 'react'

class Random extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             rand: null
        }
    }

    handleRandom(){
        const API_Key = process.env.REACT_APP_APIKEY;
        const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
        
        axios.get(url, {params:{key: API_Key}})
        .then((response)=>{
            const data = response.data;
            const random = data.data;
            console.log(random);
            const randomObj = {
                imageUrl = data.images.looping.mp4
            }
            this.setState({random});
        })
        .catch((err) => {
            console.log(err);
            this.setState({trending:[]});
        });
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Random
