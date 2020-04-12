import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default class nav extends Component {
    render() {
        return (
            <ul className='nav clearfix'>
                <li><NavLink to='/main' className='nav-item' activeClassName='nav-item-active' target='_blank'>首页</NavLink></li>
                <li><NavLink to='/visit' className='nav-item' activeClassName='nav-item-active' target='_blank'>走进新叶</NavLink></li>
                <li><NavLink to='/show' className='nav-item' activeClassName='nav-item-active' target='_blank'>案例展示</NavLink></li>
                <li><NavLink to='/business' className='nav-item' activeClassName='nav-item-active' target='_blank'>主要业务</NavLink></li>
                <li><NavLink to='/service' className='nav-item' activeClassName='nav-item-active' target='_blank'>联系我们</NavLink></li>
            </ul>
        )
    }
}
