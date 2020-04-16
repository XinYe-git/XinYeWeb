import React, { Component,createContext } from 'react'
import './index.css'
import PersonalLeft from './personalLeft'
export const {Provider,Consumer}=createContext()
export default class personal extends Component {
    render() {
        return (
            <Provider value={this.props.match.params.userId}>
                <div className="personal clearfix">
                    <PersonalLeft uesId={this.props.match.params.uesId}/>
                </div>
            </Provider>
        )
    }
}
