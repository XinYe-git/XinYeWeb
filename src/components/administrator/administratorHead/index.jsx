import React, { Component } from 'react'
import Logo from './Logo'
import AdministratorButton from './administratorButton'
import './index.css'
export default class administratorHead extends Component {
    render() {
        return (
            <div className="administratorHead">
                <Logo/>
                <AdministratorButton/>
            </div>
        )
    }
}
