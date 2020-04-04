import React, { Component } from 'react'
export default class logo extends Component {
    render() {
        return (
            <a href="/">
                <div className='logo'>
                    <img src={require('./logo.png')} alt="logo" className='logo-img'/>
                    <span className='logo-words'>新叶工作室</span>
                </div>
            </a>
        )
    }
}
