import React, { Component } from 'react'

export default class Logo extends Component {
    render() {
        return (
            <div className="administratorLogo">
                <img src={require('../../header/logo.png')} alt="" className="administratorImg"/>
                <span className="administratorWord">新叶工作室</span>
            </div>
        )
    }
}
