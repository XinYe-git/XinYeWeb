import React, { Component } from 'react'
import axios from 'axios'
import {getPersonal} from '../../redux/action'
import {connect} from 'react-redux'
class singnInForm extends Component {
    constructor(){
        super()
        this.state={
            captcha:'',
            name:"",
            passwd:"",
            test:""
        }
        this.captchaAgain=this.captchaAgain.bind(this)
        //初始化时获取验证码
        this.captchaAgain()
    }
    //获取验证码
    captchaAgain(){
        axios.get("/wk/User_Con/Verify",{
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
    //将表单数据绑定到state中
    bindData(e){
        this.setState({[e.target.name]:e.target.value})
    }
    //发送表单数据
    setFormData(e){
        e.preventDefault()
        axios.post("/wk/User_Con/LoginDeal",{
            withCredentials:true,
            // crossDomain:true,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
                },
            data:{
                name:this.state.name,
                passwd:this.state.passwd,
                test:this.state.test
            },
            transformRequest: [function (data) {
                // Do whatever you want to transform the data
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
              }],
        }).then((suc)=>{
            switch(suc.data.return){
                case '验证码不对':
                    // this.captchaAgain()
                    alert('验证码不对,请重新输入')
                    break
                case '用户或者密码不正确，请检查大小写':
                    this.captchaAgain()
                    alert('用户或者密码不正确，请检查大小写')
                    break
                case '登录成功':
                    this.props.getPersonal(()=>{window.location.reload()})
                    break
                default:
                    alert('返回值未知')
            }
        },(err)=>{
            console.log(err)
        })
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
                <p className="singnIn-title">登录</p>
                <form action="/User_Con/LoginDeal" method="post" onSubmit={this.setFormData.bind(this)}>
                    <div className="passName singnIn-item">
                        <label htmlFor="">用户名</label>
                        <input type="text" name="name" onChange={this.bindData.bind(this)} placeholder="用户名/邮箱"/>
                    </div>
                    <div className="password singnIn-item">
                        <label htmlFor="">密  码</label>
                        <input type="password" name="passwd" onChange={this.bindData.bind(this)}/>
                    </div>
                    <div className="captcha singnIn-item">
                        <label htmlFor="">验证码</label>
                        <input type="text" name="test" onChange={this.bindData.bind(this)}/>
                        <img src={this.state.captcha} alt="" onClick={this.captchaAgain.bind(this)}/>
                    </div>
                    <div className="signIn-forget"><span onClick={()=>{this.props.changeStatus(2)}}>忘记密码?</span></div>
                    <input type="submit" value="登录" className="signIn-submit"/>
                </form>
            </>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps,{getPersonal})(singnInForm)
