import React, { Component } from 'react'
import AdministratorHead from './administratorHead/index'
import {connect} from 'react-redux'
import {getPersonal} from '../../redux/action'
import './index.css'
import AdministratorNav from './administratorNav' 
class administrator extends Component {
    componentDidMount(){
        this.props.getPersonal()
    }
    render() {
        return (
            <div className="administrator">
                <AdministratorHead/>
                <div className="clearfix">
                    <AdministratorNav/>
                </div>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps,{getPersonal})(administrator)