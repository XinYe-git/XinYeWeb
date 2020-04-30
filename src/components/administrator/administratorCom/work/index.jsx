import React, { Component } from 'react'
import Axios from 'axios'
export default class work extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            workArr:[]
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/wk/Works_con/WorksSeek",{
            params:{
                page
            }
        }).then(suc=>{
            if(suc.data.return==="没有作品了哦") return
            this.setState({
                maxPage:suc.data.pages,
                workArr:suc.data.contest
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
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    作品信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">作品名</div>
                            <div className="administrator-cell">作品内容</div>
                            <div className="administrator-cell">图片</div>
                            <div className="administrator-cell">时间</div>
                            <div className="administrator-cell">作品标识</div>
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
                            this.state.workArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell">{item.name}</div>
                                        <div className="administrator-cell"><p>{item.content}</p></div>
                                        <div className="administrator-cell administrator-work-cell"><img src={item.picture} alt=""/></div>
                                        <div className="administrator-cell">{item.time}</div>
                                        <div className="administrator-cell">{item.designation}</div>
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
