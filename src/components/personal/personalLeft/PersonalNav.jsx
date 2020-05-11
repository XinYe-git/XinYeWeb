import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class PersonalNav extends Component {
    render() {
        return (
            <div className="PersonalNav">
                <NavLink to={`/personal/${this.props.personalData.id}/order`} activeClassName="PersonalNav-check" className="PersonalNav-item">我的订单</NavLink>
                <NavLink to={`/personal/${this.props.personalData.id}/collection`} activeClassName="PersonalNav-check" className="PersonalNav-item">我的收藏</NavLink>
                <NavLink to={`/personal/${this.props.personalData.id}/management`} activeClassName="PersonalNav-check" className="PersonalNav-item">账号管理</NavLink>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(PersonalNav)