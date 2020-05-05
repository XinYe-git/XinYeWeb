import React, { Component } from 'react'
import Axios from 'axios'
export default class business extends Component {
    constructor(){
        super()
        this.state={
            businessArr:[]
        }
        this.getUser()
    }
    getUser(){
        Axios.get("/ygq/user_busi/index").then(suc=>{
            console.log(suc.data)
            this.setState({
                businessArr:suc.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    业务信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">业务</div>
                            <div className="administrator-cell">内容</div>
                            <div className="administrator-cell">图片</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.businessArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell">{item.title}</div>
                                        <div className="administrator-cell"><p>{item.explains}</p></div>
                                        <div className="administrator-cell administrator-work-cell"><img src={item.image} alt=""/></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="administrator-Button">
                    <div className="administrator-nextButton">删除</div>
                </div>
            </div>
        )
    }
}
