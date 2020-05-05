import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Logo extends Component {
    render() {
        return (
            <Link className="administratorLogo" to="/" target="_blank">
                <img src={require('../../header/logo.png')} alt="" className="administratorImg"/>
                <span className="administratorWord">新叶工作室</span>
            </Link>
        )
    }
}
