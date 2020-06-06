import React, { Component } from 'react'
import axios from "axios"
import Search from './Search'
import Trending from './Trending'


class Giphy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            result: "",
            searchInput: "",
            gifs: [],             
        };
    }

    handleInput = (e) => {
        this.setState({searchInput: e.target.value})
    };

    handleSearch = () => {
        const searchInput = this.state.searchInput;
        const API_Key = process.env.REACT_APP_APIKEY;
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_Key}&limit=10`;

        axios.get(url, {params:{key: API_Key}})
        .then((response)=>{
            const data = response.data;
            const gifs = data.data;
            console.log(gifs);
            this.setState({result: searchInput, searchInput: "", gifs});
        })
        .catch((err) => {
            console.log(err);
            this.setState({gifs:[]});
        });
    };
    
    
    render() {
        let gifList;
        if(this.state.gifs.length===0){
            gifList=<Trending/>
        }else{
            gifList = (
                <div>
                    {this.state.gifs.map((gif, index)=>{
                        return (<video key = {index} loop autoPlay>
                            <source src={gif.images.looping.mp4} alt= "gifImage"
                            width={250} height = {250} />
                            </video>);
                    })}
                </div>
            );
        }

        return(
            <div className = "giphy">
                <h1>Gif Search</h1>
                <Search 
                    value = {this.state.searchInput}
                    onChange = {this.handleInput}
                    onSearch = {this.handleSearch}
                />
                <h3>{this.state.result}</h3>
                <>{gifList}</>
            </div>
        );
    }
}

export default Giphy
