import React, { Component } from 'react'
import axios from 'axios'
export default class platformItem extends Component {
    constructor(){
        super()
        this.state={
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
                                <div className="platform-button">创建订单</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
