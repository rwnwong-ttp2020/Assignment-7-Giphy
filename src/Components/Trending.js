import React, { Component } from 'react'
import axios from 'axios'

class Trending extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trending: [] // defining array for trending list.

        }
    }

    componentDidMount(){
        const API_Key = process.env.REACT_APP_APIKEY;
        const url = `http://api.giphy.com/v1/gifs/trending?api_key=${API_Key}&limit=10`;
        
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
                <>
                    {this.state.trending.map((trend, index)=>{
                        return (<video key = {index} loop autoPlay>
                            <source src={trend.images.looping.mp4} alt= "gifImage"
                            width={250} height = {250} />
                            </video>);
                    })}
                </>
            )
        }
        return (
            <div class = "trending">
                <h1>Trending</h1>
                {trendsListing}
            </div>
        )
    }
}

export default Trending
