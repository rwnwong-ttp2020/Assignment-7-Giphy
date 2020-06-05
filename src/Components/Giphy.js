import React, { Component } from 'react'
import axios from "axios"
import Search from './Search'


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
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${API_Key}`;

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
            gifList = <></>;
        }else{
            gifList = (
                <ul>
                    {this.state.gifs.map((gif, index)=>{
                        return <li key = {index}>{gif.url}</li>;
                    })}
                </ul>
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
                {gifList}
            </div>
        );
    }
}

export default Giphy
