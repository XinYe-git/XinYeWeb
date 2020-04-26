import React, { Component } from 'react'
import Logo from './logo'
import Nav from './nav'
import Reg from './regButton'
import Personal from './personalButton'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className='header'>
                <div className="w">
                    <Logo/>
                    <Nav/>
                    {
                        //用cookie判断，这样快些
                        document.cookie.indexOf('id')!==-1?
                        <Personal/>
                        :
                        <Reg/>
                    }
                </div>
            </div>
        )
    }
}

