import React, { Component } from 'react'
import qs from "qs"
import './main.css'
import Axios from 'axios';

export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inval: 'i',
            showElem: 'none',
            regProChe: 'false',
            emil:"",
            passwd:"i",
            test:""
        };
    }
    changeData = (str) => {
        let temp = ""
        let strA = str.target.value;
        switch (str.target.dataset.type){
            case "name":
                // 禁止用户输入中文的操作
                // 进行筛选将数字、英文，限制在Unicode编码前255个
                for (let i = 0; i < strA.length; i++)
                    if (strA.charCodeAt(i) > 0 && strA.charCodeAt(i) < 255)
                        temp += strA.charAt(i)
                if(strA.length <= 10 && strA.length >= 2){
                    this.setState({
                        inval: temp
                    })
                }else{
                    this.setState({
                        inval: ""
                    })
                }
                break
            case "passwd":
                // 禁止用户输入中文的操作
                // 进行筛选将数字、英文，限制在Unicode编码前255个
                for (let i = 0; i < strA.length; i++)
                    if (strA.charCodeAt(i) > 0 && strA.charCodeAt(i) < 255)
                        temp += strA.charAt(i)
                if(strA.length <= 15 && strA.length>=5){
                    this.setState({
                        passwd: temp
                    })
                }else{
                    this.setState({
                        passwd:""
                    })
                }
                break
            case "test":
                // 禁止用户输入中文的操作
                // 进行筛选将数字、英文，限制在Unicode编码前255个
                for (let i = 0; i < strA.length; i++)
                    if (strA.charCodeAt(i) > 0 && strA.charCodeAt(i) < 255)
                        temp += strA.charAt(i)
                this.setState({
                    test: temp
                })
                break
            default:
                return
        }
    }

    chkEmail = (strEmail) => {
        let strEmailA = strEmail.target.value
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(strEmailA)) {
            // alert('电子邮件格式错误')
            this.setState({
                showElem: 'block',
            })
            return false;
        }
        else {
            this.setState({
                showElem:"none",
                emil:strEmailA
            })
            return true;
        }
    }
    regProChe = (regpro)=>{
        this.setState((prevState) => {
            return {
                regProChe: !prevState.regProChe,
            }
         },//()=>{
        //     console.log(this.state.regProChe)
        // }
        )
    }
    getTest(){
        if(!this.state.emil){
            alert("请输入正确的邮箱地址")
        }else{
            Axios.post("/wk/User_Con/Mail",qs.stringify({
                mail:this.state.emil
            })).then(suc=>{
                if(suc.data.return==="邮箱发送成功"){
                    alert("发送成功")
                }else{
                    alert("未知错误")
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    sendData(){
        if(!this.state.inval || this.state.inval==="i" || !this.state.emil || !this.state.passwd || this.state.passwd==="i" || !this.state.test){
            alert("请输入正确的信息")
        }else{
            Axios.post("/wk/User_Con/RegisterDeal",qs.stringify({
                name:this.state.inval,
                passwd:this.state.passwd,
                mail:this.state.emil,
                test:this.state.test
            })).then(suc=>{
                if(suc.data.return==="验证码不对"){
                    alert("验证码不对")
                }else if(suc.data.return==="用户注册成功"){
                    alert("注册成功")
                    window.location.replace('/')
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    render() {
        return (
            <div className='bgBox clearfix'>
                <div className='regleft'>
                    <div className='reglogo'>
                        <h2>新叶网络工作室</h2>
                    </div>
                    <div className='regText'>
                        <h1>轻姿态</h1>
                        <p>享受美好的生活品质</p>
                    </div>
                </div>
                <div className='regright'>
                    <div className='regInfor'>
                        <h2>欢迎注册</h2>
                        <a href="/" className='toLoding'>已有账号?<span>登录</span></a>
                        <form action="" method="post" className='regIfm clearfix'>
                            <div className='reginputBox'>用 户 名
                              <input type="text" placeholder='请设置用户名'
                                    className='reginputMod regUserName'
                                    onChange={(str) => this.changeData(str)}
                                    data-type="name"
                                />
                                {(!this.state.inval==="i" || !this.state.inval) && <p className='chkEmail'>用户名在2-10字符之间</p>}
                            </div>
                            <div className='reginputBox'>邮 &emsp; 箱
                                <input type="text" placeholder='请填写邮箱号'
                                    name="regMail"
                                    size="30"
                                    className='reginputMod regMail'
                                    onBlur={(strEmail) => this.chkEmail(strEmail)}
                                />
                                <p className='chkEmail' style={{ display: this.state.showElem }}>邮箱格式错误</p>
                            </div>
                            <div className='reginputBox'>密 &emsp; 码
                                <input type="password"
                                    maxLength="14"
                                    placeholder='6-14个字符组成，区分大小写'
                                    className='reginputMod regPassword'
                                    onChange={(str) => this.changeData(str)}
                                    data-type="passwd"
                                />
                                {(!this.state.passwd==="i" || !this.state.passwd) && <p className='chkEmail'>密码在6-16字符之间</p>}
                            </div>
                            <div className='reginputBox '><span>验 证 码</span>
                                <input type="text" 
                                    placeholder='请输入验证码' 
                                    maxLength="6"
                                    className='reginputMod regCaptcha' 
                                    onChange={(str) => this.changeData(str)}
                                    data-type="test"
                                />
                                <div className='regCaptchaimg ' onClick={this.getTest.bind(this)}>
                                    <span>获取验证码</span>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <button type="button" name='submit' className='regSubmit' onClick={this.sendData.bind(this)}>注 册</button>
                            <div className='regProtocol'>
                                <input type="checkbox"
                                    className='regProChe'
                                    // onClick={this.regProChe}
                                    onChange={this.regProChe}
                                    checked={this.state.regProChe ? true : false }
                                />&ensp;
                                <span>阅读并接受<a href="/">《新叶用户协议》</a>及<a href="/">《新叶隐私保护声明》</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
