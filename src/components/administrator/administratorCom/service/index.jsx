import React, { Component } from 'react'
import Axios from 'axios'
export default class service extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            serviceArr:[]
        }
        this.getUser()
    }
    getUser(){
        Axios.get("/ygq/user_ques/index").then(suc=>{
            this.setState({
                maxPage:suc.data.pages,
                serviceArr:suc.data.message
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
                    订单信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">问题</div>
                            <div className="administrator-cell">联系电话</div>
                            <div className="administrator-cell">反馈人</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.serviceArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr" key={index}>
                                        <div className="administrator-cell">{item.content}</div>
                                        <div className="administrator-cell"><p>{item.tel}</p></div>
                                        <div className="administrator-cell">{item.client}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="administrator-Button">
                    <div className="administrator-nextButton" onClick={this.nextPage.bind(this)}>下一页</div>
                </div>
            </div>
        )
    }
}
