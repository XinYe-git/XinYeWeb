import React, { Component } from 'react'
import './index.css'
export default class collection extends Component {
    render() {
        return (
            <div className="collection">
                <div className="collection-item">
                    <img src={require('../AttendanceSheet/checkIn.png')} alt=""/>
                    <p className="collection-item-name">官网</p>
                </div>
                <div className="collection-item">
                    <img src={require('../AttendanceSheet/checkIn.png')} alt=""/>
                    <p className="collection-item-name">官网</p>
                </div>
                <div className="collection-item">
                    <img src={require('../AttendanceSheet/checkIn.png')} alt=""/>
                    <p className="collection-item-name">官网</p>
                </div>
                <div className="collection-item">
                    <img src={require('../AttendanceSheet/checkIn.png')} alt=""/>
                    <p className="collection-item-name">官网</p>
                </div>
            </div>
        )
    }
}
