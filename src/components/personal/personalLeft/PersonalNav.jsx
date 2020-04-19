import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Consumer} from '../index'
export default class PersonalNav extends Component {
    render() {
        return (
            <Consumer>
                {
                    (userId)=>{
                        return(
                            <div className="PersonalNav">
                                <NavLink to={`/personal/${userId}/order`} activeClassName="PersonalNav-check" className="PersonalNav-item">我的订单</NavLink>
                                <NavLink to={`/personal/${userId}/collection`} activeClassName="PersonalNav-check" className="PersonalNav-item">我的收藏</NavLink>
                                <NavLink to={`/personal/${userId}/management`} activeClassName="PersonalNav-check" className="PersonalNav-item">账号管理</NavLink>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}
