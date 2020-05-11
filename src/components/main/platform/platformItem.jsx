import React, { Component } from 'react'
import axios from 'axios'
import OrderForm from './orderForm'
export default class platformItem extends Component {
    constructor(){
        super()
        this.state={
            isDisplay:false,
            orderData:{
                title:"",
                id:""
            },
            //默认数据
            platformArr:[
                {
                    title:"",
                    explains:""
                },
                {
                    title:"",
                    explains:""
                },
                {
                    title:"",
                    explains:""
                },
                {
                    title:"",
                    explains:""
                },
                {
                    title:"",
                    explains:""
                }
            ]
        }
        //获取业务信息
        axios.get("/ygq/user_busi/index").then((suc)=>{
            this.setState({platformArr:Object.assign(this.state.platformArr,suc.data)})
        }).catch(err=>{
            console.log(err)
        })
    }
    toggleOrderForm(e){
        if(document.cookie.indexOf('id')!==-1){
            this.setState({
                isDisplay:!this.state.isDisplay,
                orderData:Object.assign(
                    this.state.orderData,
                    {title:e.target.dataset.title},
                    {id:e.target.dataset.id}
                )
            })
        }else{
            alert('请先登录')
        }
    }
    render() {
        return (
            <div className="platform-show">
                {
                    this.state.platformArr.map((item,index)=>{
                        return(
                            <div className="platform-item" key={index}>
                                <header className='platform-item-header'>{item.title}</header>
                                <article className='platform-item-article'>
                                {item.explains}
                                </article>
                                <div className="platform-button" data-title={item.title} data-id={item.id} onClick={this.toggleOrderForm.bind(this)}>创建订单</div>
                            </div>
                        )
                    })
                }
                {this.state.isDisplay&&<OrderForm toggleOrderForm={this.toggleOrderForm.bind(this)} orderData={this.state.orderData}/>}
            </div>
        )
    }
}
