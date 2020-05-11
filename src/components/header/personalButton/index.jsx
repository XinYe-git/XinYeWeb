import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
import {connect} from 'react-redux'
class personalButton extends Component {
    componentDidMount(){
        if(this.props.message.length!==0){
            this.message.classList.add("have-PersonalButton-message")
        }else{       
            this.message.classList.remove("have-PersonalButton-message")
        }
    }
    componentDidUpdate(){
        if(this.props.message.length!==0){
            this.message.classList.add("have-PersonalButton-message")
        }else{       
            this.message.classList.remove("have-PersonalButton-message")
        }
    }
    render() {
        return (
            <div className="personalButton">
                 <NavLink to={`/personal/${this.props.personalData.id}/message`} activeClassName="PersonalButton-check" className="PersonalButton-message">
                    <div className="" ref={dom=>this.message=dom}></div>
                    <img src={require('./message.png')} alt=""/>
                </NavLink>
                 <NavLink to={`/personal/${this.props.personalData.id}/attendanceSheet`} activeClassName="PersonalButton-check" className="PersonalButton-attendanceSheet"><img src={this.props.personalData.head} alt=""/></NavLink>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(personalButton)