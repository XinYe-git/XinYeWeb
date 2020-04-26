import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class PersonalCheck extends Component {
    check(){
        axios.get("/qk/Register_Con/add").then((suc)=>{
            console.log(suc)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className='PersonalCheck'>
                <div className="PersonalCheckData">
                    <img src={this.props.personalData.head} alt="" className="personalImg"/>
                    <p className="personalName">{this.props.personalData.name}</p>
                    <p className="personalDataOther">
                    <span className="personalAddress">{this.props.personalData.address_shi}</span> | <span className="personalProfession">{this.props.personalData.peofessions}</span>
                    </p>
                </div>
                <div className="PersonalButton" onClick={this.check.bind(this)}>签到</div>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(PersonalCheck)
