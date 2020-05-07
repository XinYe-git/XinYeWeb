import React, { Component } from 'react'
import axios from "axios"
import qs from "qs"
import {connect} from 'react-redux'
class orderForm extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            content:"",
            tel:""
        }
    }
    setData(e){
        let key=e.target.name
        let value=e.target.value
        this.setState({[key]:value})
    }
    sendOrder(){
        if(!/^1[345789]\d{9}$/.test(this.state.tel)){
            alert("请输入正确的手机号")
            return
        }
        console.log()
        axios.post("/ygq/user_task/add",qs.stringify({
            name:this.state.name,
            client:this.props.personalData.name,
            telt:this.state.tel,
            content:this.state.content,
            money:"null",
            status:"0",
            bid:this.props.orderData.id
        })).then(suc=>{
            console.log(suc.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="orderForm">
                <div className="orderForm-head">
                    {this.props.orderData.title}
                    <div className="orderForm-cancel" onClick={this.props.toggleOrderForm}>x</div>
                </div>
                <div className="orderForm-item">
                    <label htmlFor="content" className="content-label" >订单内容</label>
                    <textarea name="content" id="content" onChange={this.setData.bind(this)}></textarea>
                </div>
                <div className="orderForm-item">
                    <label htmlFor="name">订单名</label>
                    <input type="text" id="name" name="name" onChange={this.setData.bind(this)}/>
                </div>
                <div className="orderForm-item">
                    <label htmlFor="tel">联系电话</label>
                    <input type="number" id="tel" name="tel" onChange={this.setData.bind(this)}/>
                </div>
                <div className="orderForm-sent" onClick={this.sendOrder.bind(this)}>
                    创建
                </div>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(orderForm)