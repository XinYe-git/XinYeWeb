import React, { Component } from 'react'
import './index.css'
import PersonalCheck from './PersonalCheck'
import PersonalNav from './PersonalNav'
export default class personalLeft extends Component {
    render() {
        return (
            <div className="personalLeft">
                <PersonalCheck/>
                <PersonalNav />
            </div>
        )
    }
}
