import React, { Component } from 'react'
import Logo from './logo'
import Nav from './nav'
import Reg from './regButton'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className='header'>
                <div className="w">
                    <Logo/>
                    <Nav/>
                    <Reg/>
                </div>
            </div>
        )
    }
}
