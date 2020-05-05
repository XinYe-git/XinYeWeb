import React, { Component } from 'react'
import './index.css'
import {connect} from 'react-redux'
class message extends Component {
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
                    this.props.message.map((item,index)=>{
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
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(message)