import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
export default class personalButton extends Component {
    render() {
        return (
            <div className="personalButton">
                 <NavLink to={`/personal/111/message`} activeClassName="PersonalButton-check" className="PersonalButton-message"><img src={require('./message.png')} alt=""/></NavLink>
                 <NavLink to={`/personal/111/attendanceSheet`} activeClassName="PersonalButton-check" className="PersonalButton-attendanceSheet"><img src={require('.')} alt=""/></NavLink>
            </div>
        )
    }
}
