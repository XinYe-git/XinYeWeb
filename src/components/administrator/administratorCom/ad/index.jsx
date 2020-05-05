import React, { Component } from 'react'
import Axios from 'axios'
export default class ad extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            adArr:[]
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/qk/Advertise_Con/index",{
            params:{
                page
            }
        }).then(suc=>{
            this.setState({
                maxPage:suc.data.pages,
                adArr:suc.data.advertise
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    nextPage(){
        if(this.state.page>=this.state.maxPage){
            alert("已到达最大页")
            return
        }
        this.setState({page:this.state.page+1},()=>{
            this.getUser(this.state.page)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            window.pageYOffset = 0
        })
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    广告信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">广告名</div>
                            <div className="administrator-cell">图片</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.adArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell">{item.picture}</div>
                                        <div className="administrator-cell administrator-ad-cell"><img src={item.link} alt=""/></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="administrator-Button">
                    <div className="administrator-nextButton" onClick={this.nextPage.bind(this)}>删除</div>
                    <div className="administrator-nextButton" onClick={this.nextPage.bind(this)}>下一页</div>
                </div>
            </div>
        )
    }
}
