import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'
import "animate.css";
import {getPersonal} from '../../redux/action'
import {connect} from 'react-redux'
class getPassWd extends Component {
    constructor(){
        super()
        this.state={
            captcha:'',
            name:"",
            mail:"",
            test:"",
            passwd:""
        }
    }
    //将表单数据绑定到state中
    bindData(e){
        this.setState({[e.target.name]:e.target.value})
    }
    //发送表单数据
    setFormData(e){
        e.preventDefault()
        if(!this.state.name || this.state.name.length<2 || this.state.name.length>10){
            alert("请正确的用户名")
            return
        }else if(!this.state.passwd || this.state.passwd.length<5 || this.state.passwd.length>14){
            alert("新密码请符合规范")
            return
        }else if(!this.state.mail || !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.state.mail)){
            alert("请输入正确的邮箱")
            return
        }else if(!this.state.test){
            alert("请输入验证码")
            return
        }
        for (let i = 0; i < this.state.passwd.length; i++)
            if (this.state.passwd.charCodeAt(i) >= 255){
                alert("新密码请符合规范")
                return
            }
        axios.post("/wk/User_Con/BackPass",qs.stringify({
            name:this.state.name,
            passwd:this.state.passwd,
            mail:this.state.mail,
            test:this.state.test
        })).then(suc=>{
            if(suc.data.return==="修改成功"){
                alert("修改成功")
                window.location.reload()
            }else{
                alert("修改失败，注意你填写的信息哦")
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    animateCSS=(element, animation, prefix = 'animate__')=>
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            element.classList.add(`${prefix}animated`, animationName);
            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd() {
                console.log(1)
                element.classList.remove(`${prefix}animated`, animationName);
                element.removeEventListener('animationend', handleAnimationEnd);
                resolve('Animation ended');
            }
            element.addEventListener('animationend', handleAnimationEnd);
        });
    sendEmail(e){
        if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.state.mail)){
            alert("请输入正确的邮箱")
        }else{
            this.animateCSS(e.target,'headShake')
            axios.post("/wk/User_Con/Mail",qs.stringify({
                mail:this.state.mail
            })).then(suc=>{
                console.log(suc.data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    //判断store是否有用户数据,有数据就将登录页面关闭
    componentDidUpdate(){
        if(Object.keys(this.props.personalData).length){
            this.props.toggleShow()
        }
    }
    render() {
        return (
            <>
                <p className="singnIn-title">忘记密码</p>
                <form action="/User_Con/LoginDeal" method="post" onSubmit={this.setFormData.bind(this)}>
                    <div className="passName singnIn-item">
                        <label htmlFor="">用户名</label>
                        <input type="text" name="name" onChange={this.bindData.bind(this)} placeholder="用户名/邮箱"/>
                    </div>
                    <div className="passName singnIn-item">
                        <label htmlFor="">新密码</label>
                        <input type="text" name="passwd" onChange={this.bindData.bind(this)} maxLength="14" placeholder="5-14字符之间"/>
                    </div>
                    <div className="forget-email singnIn-item">
                        <label htmlFor="">电子邮箱</label>
                        <input type="text" name="mail" onChange={this.bindData.bind(this)}/>
                        <div className="sentForgetEmail" onClick={this.sendEmail.bind(this)}>
                            发送邮件
                        </div>
                    </div>
                    <div className="captcha singnIn-item">
                        <label htmlFor="">验证码</label>
                        <input type="text" name="test" onChange={this.bindData.bind(this)}/>
                    </div>
                    <div className="signIn-forget"><span  onClick={()=>{this.props.changeStatus(1)}}>登录</span></div>
                    <input type="submit" value="登录" className="signIn-submit"/>
                </form>
            </>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps,{getPersonal})(getPassWd)
