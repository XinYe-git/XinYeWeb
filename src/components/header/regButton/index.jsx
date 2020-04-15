import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import {Link} from 'react-router-dom'
import './index.css'
export default class reg extends Component {
    constructor(){
        super()
        this.state={
            signIn(){}
        }
        PubSub.subscribe("toggleShow",(toggleShow,toggleFn)=>{this.setState({signIn:toggleFn})})
    }
    render() {
        return (
            <div className='ref-button'>
                <div className="ref-item" onClick={this.state.signIn}>登录</div>
                <Link className="ref-item" to='/register' target='_blank'>注册</Link>
            </div>
        )
    }
}
