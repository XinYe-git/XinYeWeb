import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default class reg extends Component {
    render() {
        return (
            <div className='ref-button'>
                <Link className="ref-item" to={window.location.pathname+'/signIn'}>登录</Link>
                <Link className="ref-item" to={window.location.pathname+'/register'}>注册</Link>
            </div>
        )
    }
}
