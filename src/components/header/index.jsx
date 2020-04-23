import React, { Component } from 'react'
import Logo from './logo'
import Nav from './nav'
import Reg from './regButton'
import Personal from './personalButton'
import './index.css'
import {connect} from 'react-redux'
class index extends Component {
    render() {
        return (
            <div className='header'>
                <div className="w">
                    <Logo/>
                    <Nav/>
                    {
                        Object.keys(this.props.personalData).length?
                        <Personal/>
                        :
                        <Reg/>
                    }
                </div>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(index)
