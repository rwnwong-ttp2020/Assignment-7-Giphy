import React, { Component } from 'react';
import axios from 'axios';

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
                imageUrl : random.images.looping.mp4
            }
            this.setState({rand: randomObj});
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render() {
        let randGif;
        if(!this.state.rand){
           randGif = <></>
        }
        else {
           randGif = (
                <>
                 <video id = "random gif" loop autoPlay>
                            <source src={this.state.rand.images.looping.mp4} alt= "gifImage"
                            width={250} height = {250} />
                            </video>);
                    })}
                </>
            )
        }
        return (
            <div>
               <button onClick={this.handleRandom}>Random</button>
               {randGif}
            </div>
        )
    }
}

export default Random
