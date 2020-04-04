import React, { Component } from 'react'
import './index.css'
import AppreciationItem from './appreciationItem'
export default class appreciation extends Component {
    render() {
        return (
            <div className="appreciation w">
                <p className='main-title-1'>实例欣赏</p>
                <p className='main-title-2'>原创的设计，高端的技术服务</p>
                <AppreciationItem />
            </div>
        )
    }
}
