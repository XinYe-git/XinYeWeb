import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import VisitNav from "./visitNav"
import ShowNav from "./showNav"
export default class nav extends Component {
    render() {
        return (
            <ul className='nav clearfix'>
                <li className='nav-item'><NavLink to='/main'  activeClassName='nav-item-active'>首页</NavLink></li>
                <li className='nav-item'><NavLink to='/visit'  activeClassName='nav-item-active'>走进新叶</NavLink><VisitNav/></li>
                <li className='nav-item'><NavLink to='/show'  activeClassName='nav-item-active'>案例展示</NavLink><ShowNav/></li>
                <li className='nav-item'><NavLink to='/business'  activeClassName='nav-item-active'>主要业务</NavLink></li>
                <li className='nav-item'><NavLink to='/service'  activeClassName='nav-item-active'>联系我们</NavLink></li>
            </ul>
        )
    }
}
