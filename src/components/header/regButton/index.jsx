import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default class reg extends Component {
    constructor(){
        super()
        this.signIn={}
    }
    toggle(){
        document.querySelector(".signIn").classList.toggle("signIn-none")
    }
    render() {
        return (
            <div className='ref-button'>
                <div className="ref-item" onClick={this.toggle}>登录</div>
                <Link className="ref-item" to='/register' target='_blank'>注册</Link>
            </div>
        )
    }
}
