import React, { Component } from 'react'
import Axios from 'axios'
export default class order extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            orderArr:[]
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/ygq/user_task/index").then(suc=>{
            this.setState({
                maxPage:suc.data.pages,
                orderArr:suc.data.message
            })
            console.log(suc.data)
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
    getStatue(statue){
        switch (statue) {
            case "0":
                return "未处理"
            case "1":
                return "已处理"
            case "2":
                return "已完成"
            case "3":
                return "未完成"
            default:
                return "未知"
        }
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
                            <div className="administrator-cell">用户</div>
                            <div className="administrator-cell">订单名</div>
                            <div className="administrator-cell">委托人</div>
                            <div className="administrator-cell">电话</div>
                            <div className="administrator-cell">订单内容</div>
                            <div className="administrator-cell">价格</div>
                            <div className="administrator-cell">状态</div>
                            <div className="administrator-cell">业务种类</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {/* <div className="administrator-user-tr">
                            <div className="administrator-user-cell"><img src="" alt=""/></div>
                            <div className="administrator-user-cell">密码</div>
                            <div className="administrator-user-cell administrator-user-emil">41260154@qq.com</div>
                            <div className="administrator-user-cell">性别</div>
                            <div className="administrator-user-cell">职业</div>
                            <div className="administrator-user-cell">手机号</div>
                            <div className="administrator-user-cell">地址</div>
                            <div className="administrator-user-cell">签到时长</div>
                        </div> */}
                        {
                            this.state.orderArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr" key={index}>
                                        <div className="administrator-cell">{item.id}</div>
                                        <div className="administrator-cell"><p>{item.name}</p></div>
                                        <div className="administrator-cell">{item.client}</div>
                                        <div className="administrator-cell">{item.telt}</div>
                                        <div className="administrator-cell"><p>{item.content}</p></div>
                                        <div className="administrator-cell">{item.money}</div>
                                        <div className="administrator-cell">{this.getStatue(item.status)}</div>
                                        <div className="administrator-cell">null</div>
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
