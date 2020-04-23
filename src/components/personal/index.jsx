import React, { Component,createContext } from 'react'
import './index.css'
import PersonalLeft from './personalLeft'
import PersonalRight from './personalRight'
export const {Provider,Consumer}=createContext()
export default class personal extends Component {
    render() {
        return (
                <div className="personal">
                    <PersonalLeft/>
                    <PersonalRight/>
                </div>
        )
    }
}
