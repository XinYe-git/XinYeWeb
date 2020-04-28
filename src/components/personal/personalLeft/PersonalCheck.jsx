import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class PersonalCheck extends Component {
    check(){
        axios.get("/qk/Register_Con/add").then((suc)=>{
            console.log(suc)
            if(suc.data==="签到成功!"){
                alert("签到成功")
                window.location.reload()
            }else if(suc.data==="你今天已签到"){
                alert("你今天已签到")
                window.location.reload()
            }else{
                alert("未知错误")
            }
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
                    <span className="personalAddress">{this.props.personalData.address_shi}</span> | <span className="personalProfession">{this.props.personalData.professions}</span>
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
