import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import {initPersonal} from '../../../redux/action'
class administratorButton extends Component {
    tuichu(){
        Axios.get("/wk/User_Con/OutLogin").then(suc=>{
            document.cookie = `id=1;expires=${new Date(0).toUTCString()};path=/;`;
            this.props.initPersonal()
            alert("成功退出")
            console.log(this.props)
            window.location.replace('/')
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="administratorButton">
                <img src={this.props.personalData.head} alt=""/>
                <span>{this.props.personalData.name}</span>
                <span onClick={this.tuichu.bind(this)}>退出</span>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps,{initPersonal})(administratorButton)
