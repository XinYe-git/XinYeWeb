import React, { Component } from 'react'
import './index.css'
import Axios from 'axios'
export default class order extends Component {
    constructor(){
        super()
        this.state={
            orderArr:[]
        }
    }
    componentDidMount(){
        Axios.get("/ygq/user_task/showOne").then(suc=>{
            if(suc.data.msg==="目前还没有订单"){
                return
            }
            if(!Array.isArray(suc.data)){return}
            this.setState({orderArr:suc.data})
        }).catch(err=>{
            console.log(err)
        })
    }
    //判断完成状态
    isComplete(index){
        switch(index){
            case('0'):
                return "未处理"
            case('1'):
                return "已处理"
            case('2'):
                return "已完成"
            case('3'):
                return "未完成"
            default:
                return "未知"
        }
    }
    render() {
        return (
            <div className="personalOrder">
                <div className="Order-title">
                    <div className="Order-title-tr">
                        <div className="Order-title-cell">订单</div>
                        <div className="Order-title-cell">状态</div>
                        <div className="Order-title-cell">价格</div>
                    </div>
                </div>
                <div className="Order-body">
                    {/* <div className="order-item">
                        <div className="order-content">某某公司的微信公众号设计，包括美工组，前端组以及后台组的全部内容</div>
                        <div className="order-state">未完成</div>
                        <div className="order-price">￥222</div>
                    </div> */}
                    {
                        this.state.orderArr.map((item,index)=>{
                            return(
                                <div className="order-item" key={index}>
                                    <div className="order-content">{item.name}</div>
                                    <div className="order-state">{this.isComplete(item.status)}</div>
                                    <div className="order-price">￥{item.money}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
