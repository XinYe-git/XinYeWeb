import React, { Component } from 'react'
import axios from 'axios'
export default class platformItem extends Component {
    constructor(){
        super()
        this.state={
            platformArr:[]
        }
        //获取业务信息
        axios.get("/ygq/user_busi/index").then((suc)=>{
            this.setState({platformArr:suc.data})
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="platform-show">
                {/* <div className="platform-item">
                    <header className='platform-item-header'>公司企业网站开发</header>
                    <article className='platform-item-article'>
                    公司企业网站 /上建站/10秒简单快捷建站/0技术/3000套精美网站模板/任意切换/公司企业网站,随时建随时改,1900万企业建站首选.
                    </article>
                    <div className="platform-button">创建订单</div>
                </div> */}
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
