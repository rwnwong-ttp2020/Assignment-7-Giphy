import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Trending extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trending: [] // defining array for trending list.

        }
    }

    componentDidMount(){
        const API_Key = process.env.REACT_APP_APIKEY;
        const url = `http://api.giphy.com/v1/gifs/trending?api_key=${API_Key}&limit=16`;
        
        axios.get(url, {params:{key: API_Key}})
        .then((response)=>{
            const data = response.data;
            const trending = data.data;
            console.log(trending);
            this.setState({trending});
        })
        .catch((err) => {
            console.log(err);
            this.setState({trending:[]});
        });
    }
    
    render() {
        let trendsListing;
        if(this.state.trending.length === 0){
            trendsListing = <></>
        }
        else {
            trendsListing = (
                <div className= "gif-list">
                    {this.state.trending.map((trend, index)=>{
                        return (<video key = {index} loop autoPlay>
                            <source src={trend.images.original_mp4.mp4} alt= "gifImage"
                            width={250} height = {250} />
                            </video>);
                    })}
                </div>
            )
        }
        return (
            <div>
                {trendsListing}
            </div>
        )
    }
}

export default Trending
