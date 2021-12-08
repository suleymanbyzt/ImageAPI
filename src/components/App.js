import React, {Component} from 'react'
import SearchBar from './SearchBar/SearchBar'
import "./App.css";
import axios from "axios";
import ImageList from "./image/ImageList";

class App extends Component{
state={
    images:[]
};
    onSearchImage=async(search)=>{
        console.log('App: '+search)
        const result = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query :search
            },
            headers:{
                Authorization: '[{"key":"Authorization","value":"Client-ID r9RsmgFP4NrKxkKQ2U4AJkBAcgfgyYdfD8g6j82FhfQ","description":"","type":"text","enabled":true}]'
            }
        })
        this.setState({
            images:result.data.results
        });
        }


    render() {
        return(
            <div className="app-container">
                <SearchBar onSearchImage={this.onSearchImage}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
};

export default App;
