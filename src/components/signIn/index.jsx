import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import "./index.css"
export default class signIn extends Component {
    constructor(){
        super()
        this.state={
            captcha:''
        }
        PubSub.publish("toggleShow",this.toggleShow.bind(this))
        axios.get("/User_Con/Verify",{
            responseType: 'blob'
        }).then((suc)=>{
            let reader = new FileReader()
            reader.readAsDataURL(suc.data)
            reader.onload = (e) => {
                this.setState({captcha:e.target.result})
              }
        },(err)=>{
            console.log(err)
        })
    }
    toggleShow(){
        this.signIn.classList.toggle("signIn-none")
    }
    render() {
        return (
            <div className="signIn signIn-none" onClick={this.toggleShow.bind(this)} ref={dom=>this.signIn=dom}>
                <div className="singnIn-inner" onClick={(e)=>{e.stopPropagation()}}>
                    <p className="singnIn-title">登录</p>
                    <form action="" method="post">
                        <div className="passName singnIn-item">
                            <label htmlFor="">用户名</label>
                            <input type="text" name="passName"/>
                        </div>
                        <div className="password singnIn-item">
                            <label htmlFor="">密  码</label>
                            <input type="password" name="passWord"/>
                        </div>
                        <div className="captcha singnIn-item">
                            <label htmlFor="">验证码</label>
                            <input type="text" name="captcha"/>
                            <img src={this.state.captcha} alt=""/>
                        </div>
                        <div className="signIn-forget"><a href="">忘记密码?</a></div>
                        <input type="submit" value="登录" className="signIn-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}
