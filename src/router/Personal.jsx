import React, { Component } from 'react'
import {
    Header,
    Footer,
    PersonalData,
} from '../components'
export default class Personal extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PersonalData/>
                {/* 这个组件内有路由 */}
                <Footer/>
            </div>
        )
    }
}
