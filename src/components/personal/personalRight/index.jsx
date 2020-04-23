import React, { Component } from 'react'
import './index.css'
import {Route,Redirect,Switch} from 'react-router-dom'
import AttendanceSheet from './AttendanceSheet/'
import Message from './message/'
import Collection from './collection/'
import Order from './order/'
import SetPersonal from './setPersonal/'
import {connect} from 'react-redux'
class personalRight extends Component {
    render() {
        return (
            <div className="personalRight">
                <Switch>
                    <Route path={`/personal/${this.props.personalData.id}/attendanceSheet`} component={AttendanceSheet}/>
                    <Route path={`/personal/${this.props.personalData.id}/message`} component={Message}/>
                    <Route path={`/personal/${this.props.personalData.id}/collection`} component={Collection}/>
                    <Route path={`/personal/${this.props.personalData.id}/order`} component={Order}/>
                    <Route path={`/personal/${this.props.personalData.id}/management`} component={SetPersonal}/>
                    <Redirect exact from={`/personal/${this.props.personalData.id}`} to={`/personal/${this.props.personalData.id}/attendanceSheet`}/>
                <SetPersonal/>
                </Switch>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(personalRight)
