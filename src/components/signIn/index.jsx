import React, { Component } from 'react'
import "./index.css"
import SingnInForm from './singnInForm'
export default class signIn extends Component {
    render() {
        return (
            <div className="signIn" onClick={this.props.toggleShow} ref={dom=>this.signIn=dom}>
                <div className="singnIn-inner" onClick={(e)=>{e.stopPropagation()}}>
                    <SingnInForm toggleShow={this.props.toggleShow}/>
                </div>
            </div>
        )
    }
}
