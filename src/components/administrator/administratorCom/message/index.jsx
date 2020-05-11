import React, { Component } from 'react'
import "./index.css"
import Axios from 'axios'
import qs from "qs"
export default class message extends Component {
    constructor(){
        super()
        this.state={
            title:"",
            content:"",
            uname2:""
        }
    }
    setMessage(e){
        const mydata=e.target.dataset.type
        const newVal = e.target.value
        this.setState({
            [mydata]: newVal
        })
    }
    sentMessage(){
        Axios.post("/qk/Message_Con/add",qs.stringify(this.state)).then(suc=>{
            console.log(suc.data)
            if(suc.data.error==="收件人不存在！"){
                alert("收件人不存在！")
            }else{
                alert("添加公告成功")
                window.location.reload()
                window.scrollTo(0,0);
            }
        }).catch(err=>{
            alert("请求失败")
            console.log(err)
        })
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    发布公告
                </div>
                <div className="message-title">
                    <label htmlFor="">公告标题</label>
                    <input type="text" value={this.state.title} data-type="title" onChange={this.setMessage.bind(this)}/>
                </div>
                <div className="message-content">
                    <label htmlFor="">公告内容</label>
                    <textarea name="" id="" value={this.state.content} data-type="content" onChange={this.setMessage.bind(this)}></textarea>
                </div>
                <div className="message-title">
                    <label htmlFor="">收信人</label>
                    <input type="text" value={this.state.uname2} data-type="uname2" onChange={this.setMessage.bind(this)}/>
                </div>
                <div className="message-button" onClick={this.sentMessage.bind(this)}>发送</div>

            </div>
        )
    }
}
