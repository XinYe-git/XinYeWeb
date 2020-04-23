import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import {connect} from 'react-redux'
class personalButton extends Component {
    render() {
        return (
            <div className="personalButton">
                 <NavLink to={`/personal/${this.props.personalData.id}/message`} activeClassName="PersonalButton-check" className="PersonalButton-message"><img src={require('./message.png')} alt=""/></NavLink>
                 <NavLink to={`/personal/${this.props.personalData.id}/attendanceSheet`} activeClassName="PersonalButton-check" className="PersonalButton-attendanceSheet"><img src={this.props.personalData.head} alt=""/></NavLink>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(personalButton)