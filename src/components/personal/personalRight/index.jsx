import React, { Component } from 'react'
import './index.css'
import {Route,Redirect,Switch} from 'react-router-dom'
import AttendanceSheet from './AttendanceSheet/'
import Message from './message/'
import Collection from './collection/'
import Order from './order/'
import SetPersonal from './setPersonal/'
export default class personalRight extends Component {
    render() {
        return (
            <div className="personalRight">
                <Switch>
                    <Route path='/personal/:userId/attendanceSheet' component={AttendanceSheet}/>
                    <Route path='/personal/:userId/message' component={Message}/>
                    <Route path='/personal/:userId/collection' component={Collection}/>
                    <Route path='/personal/:userId/order' component={Order}/>
                    <Route path='/personal/:userId/management' component={SetPersonal}/>
                    <Redirect exact from="/personal/:userId" to="/personal/:userId/attendanceSheet"/>
                <SetPersonal/>
                </Switch>
            </div>
        )
    }
}
