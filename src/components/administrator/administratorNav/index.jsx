import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
export default class administratorNav extends Component {
    render() {
        return (
            <div className="administratorNav">
                <NavLink className="administratorNav-item" to="/administrator/user" activeClassName="administratorNav-item-check">用 户</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/order" activeClassName="administratorNav-item-check">订 单</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/works" activeClassName="administratorNav-item-check">作 品</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/collection" activeClassName="administratorNav-item-check">收 藏</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/message" activeClassName="administratorNav-item-check">公 告</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/ad" activeClassName="administratorNav-item-check">广 告</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/signed" activeClassName="administratorNav-item-check">签 到</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/service" activeClassName="administratorNav-item-check">问题反馈</NavLink>
                <NavLink className="administratorNav-item" to="/administrator/business" activeClassName="administratorNav-item-check">业 务</NavLink>
            </div>
        )
    }
}
