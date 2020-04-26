import React, { Component } from 'react'
import "./index.css"
import WorksItem from "./worksItem"
import WorksPage from "./worksPage"
import axios from 'axios'
export default class works extends Component {
    constructor(){
        super()
        this.state={
            pageNow:1,
            maxPageNow:10,
            contest:[]
        }
        this.getWorkData(this.state.pageNow)
    }
    getWorkData(index){
        axios.get('/wk/Works_con/WorksSeek',{
            params:{
                page:index
            }
        }).then((suc)=>{
            this.setState({maxPageNow:suc.data.pages,contest:suc.data.contest})
        }).catch((err)=>{
            console.log(err)
        })
    }
    changePage(page){
        this.setState({pageNow:page},()=>{
            this.getWorkData(this.state.pageNow)
        })
    }
    render() {
        return (
            <div className="works">
                <div className="works-title">实例作品</div>
                <WorksItem contest={this.state.contest}/>
                <WorksPage pageNow={this.state.pageNow} maxPage={this.state.maxPageNow} changePage={this.changePage.bind(this)}/>
            </div>
        )
    }
}
