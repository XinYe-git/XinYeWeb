import React, { Component } from 'react'
// import axious from 'axios'
import NewsItem from "./newsItem"
import NewsPage from "./newsPage"
import './index.css'
import Axios from 'axios'
export default class news extends Component {
    constructor(){
        super()
        this.state={
            pageNow:1,
            maxPageNow:10,
            contest:[]
        }
        this.getWorkData(this.state.pageNow)
    }
    getWorkData(index,callback=()=>{}){
        Axios.get('/ygq/user_act/index',{
            params:{
                page:index
            }
        }).then((suc)=>{
            this.setState({maxPageNow:suc.data.pages,contest:suc.data.message})
            callback()
        }).catch((err)=>{
            console.log(err)
        })
    }
    changePage(page){
        this.setState({pageNow:page},()=>{
            this.getWorkData(this.state.pageNow,()=>{
                // chrome
                document.body.scrollTop = 0
                // firefox
                document.documentElement.scrollTop = 0
                // safari
                window.pageYOffset = 0
            })
        })
    }

    render() {
        return (
            <div className="news">
                <div className="news-title">news</div>
                <NewsItem contest={this.state.contest}/>
                <NewsPage pageNow={this.state.pageNow} maxPage={this.state.maxPageNow} changePage={this.changePage.bind(this)}/>
            </div>
        )
    }
}
