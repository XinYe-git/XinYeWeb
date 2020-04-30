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
            maxPageNow:1,
            contest:[]
        }
        this.getWorkData(this.state.pageNow)
    }
    getWorkData(index,callback=()=>{}){
        axios.get('/wk/Works_con/WorksSeek',{
            params:{
                page:index
            }
        }).then((suc)=>{
            if(suc.data.return==="没有作品了哦") return
            this.setState({maxPageNow:suc.data.pages,contest:suc.data.contest})
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
    componentDidMount(){
        // chrome
        document.body.scrollTop = 0
        // firefox
        document.documentElement.scrollTop = 0
        // safari
        window.pageYOffset = 0
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
