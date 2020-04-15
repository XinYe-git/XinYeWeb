import React, { Component } from 'react'
// import axious from 'axios'
import NewsItem from "./newsItem"
import NewsPage from "./newsPage"
import './index.css'
export default class news extends Component {
    constructor(){
        super()
        this.state={
            page:1
        }
    }
    setPage(page){
        this.setState({page})
    }
    componentDidMount(){
        // axious.get("/src/xxx",{page:this.page}).then()
    }
    render() {
        return (
            <div className="news">
                <div className="news-title">news</div>
                <NewsItem page={this.state.page}/>
                <NewsPage page={this.state.page} setPage={this.setPage}/>
            </div>
        )
    }
}
