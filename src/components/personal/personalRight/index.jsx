import React, { Component } from 'react'
import './index.css'
import AttendanceSheet from './AttendanceSheet/'
import Message from './message/'
import Collection from './collection/'
import Order from './order/'
import SetPersonal from './setPersonal/'
export default class personalRight extends Component {
    render() {
        return (
            <div className="personalRight">
                {/* <AttendanceSheet/> */}
                {/* <Message/> */}
                {/* <Collection/> */}
                {/* <Order/> */}
                <SetPersonal/>
            </div>
        )
    }
}
