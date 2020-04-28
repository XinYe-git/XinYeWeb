import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class message extends Component {
    constructor(){
        super()
        this.state={
            messageArr:[]
        }
    }
    componentDidMount(){
        axios.get("/qk/Message_Con/showusermess").then((suc)=>{
            this.setState({messageArr:suc.data.message})
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="message">
                {/* <div className="message-item">
                    <img className="message-img" alt="" src=""/>
                    <p className="message-title">公告</p>
                    <p className="message-date">今天14:00</p>
                    <p className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div> */}
                {
                    this.state.messageArr.map((item,index)=>{
                        return(
                            <div className="message-item" key={index}>
                                <img className="message-img" alt="" src={item.head1}/>
                                <p className="message-title">公告</p>
                                <p className="message-date">{item.time}</p>
                                <p className="message-content">{item.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
