import React, { Component } from 'react'
import './index.css'
export default class banner extends Component {
    render() {
        return (
            <a href="/" target='_blank'>
                <div className='banner'>
                    <div className='banner-left'></div>
                    <div className="banner-right"></div>
                </div>
            </a>
        )
    }
}
