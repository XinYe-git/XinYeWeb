import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default class reg extends Component {
    constructor(){
        super()
        this.signIn={}
    }
    setSignIn(){
        var to=""
        window.location.pathname==="/"?
        to="/main/signIn"
        :
        to=window.location.pathname+"/signIn"
        return to
    }
    render() {
        return (
            <div className='ref-button'>
                <Link className="ref-item" to={this.setSignIn()}>登录</Link>
                <Link className="ref-item" to='/register' target='_blank'>注册</Link>
            </div>
        )
    }
}
