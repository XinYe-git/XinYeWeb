import React, { Component } from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
class user extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            userArr:[]
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/wk/User_Con/ShowUsers",{
            params:{
                page
            }
        }).then(suc=>{
            this.setState({
                maxPage:suc.data.pages,
                userArr:suc.data.contect
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
    canDelete(type){
        switch(type){
            case "0":
                return true
            case "1":
                if(this.props.personalData.type==="2")
                    return true
                return false
            default:
                return false
        }
    }
    delete(e){
        if(window.confirm("是否要删除")){
            Axios.get("/wk/User_Con/DeleteUser",{
                params:{
                    id:e.target.dataset.id
                }
            }).then(suc=>{
                window.location.reload()
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    用户信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">用户头像</div>
                            <div className="administrator-cell">用户名</div>
                            <div className="administrator-cell">邮箱</div>
                            <div className="administrator-cell">性别</div>
                            <div className="administrator-cell">职业</div>
                            <div className="administrator-cell">手机号</div>
                            <div className="administrator-cell">地址</div>
                            <div className="administrator-cell">签到时长</div>
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
                            this.state.userArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr" key={index}>
                                        <div className="administrator-cell"><img src={item.head} alt=""/></div>
                                        <div className="administrator-cell">{item.name}</div>
                                        <div className="administrator-cell administrator-user-emil">{item.mail}</div>
                                        <div className="administrator-cell">{item.sex==="0"?"男":"女"}</div>
                                        <div className="administrator-cell">{item.professions}</div>
                                        <div className="administrator-cell">{item.tele}</div>
                                        <div className="administrator-cell">{item.address_sheng}</div>
                                        <div className="administrator-cell">
                                            {item.register}
                                            {this.canDelete(item.type) && <div className="changeData" data-id={item.id} onClick={this.delete.bind(this)}>删除</div>}
                                        </div>
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
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(user)