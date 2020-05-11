import React, { Component } from 'react'
import "./index.css"
import SingnInForm from './singnInForm'
import GetPassWd from './getPasswd'
export default class signIn extends Component {
    constructor(){
        super()
        this.state={
            status:1
        }
    }
    changeStatus(index){
        this.setState({status:index})
    }
    render() {
        return (
            <div className="signIn" onClick={this.props.toggleShow} ref={dom=>this.signIn=dom}>
                <div className="singnIn-inner" onClick={(e)=>{e.stopPropagation()}}>
                    {this.state.status===1 && <SingnInForm toggleShow={this.props.toggleShow} changeStatus={this.changeStatus.bind(this)}/>}
                    {this.state.status===2 && <GetPassWd toggleShow={this.props.toggleShow} changeStatus={this.changeStatus.bind(this)}/>}
                </div>
            </div>
        )
    }
}
