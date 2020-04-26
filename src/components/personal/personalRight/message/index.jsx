import React, { Component } from 'react'
import './index.css'
// import axios from 'axios'
export default class message extends Component {
    // componentDidMount(){
    //     axios.get("/qk/Message_Con/showusermess").then((suc)=>{
    //         console.log(suc.data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    render() {
        return (
            <div className="message">
                <div className="message-item">
                    <img className="message-img" alt="" src=""/>
                    <p className="message-title">公告</p>
                    <p className="message-date">今天14:00</p>
                    <p className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
                <div className="message-item">
                    <div className="message-img"></div>
                    <p className="message-title">公告</p>
                    <p className="message-date">今天14:00</p>
                    <p className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
            </div>
        )
    }
}
