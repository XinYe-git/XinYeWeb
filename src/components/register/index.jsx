import React, { Component } from 'react'

import './main.css'

export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inval: '',
            showElem: 'none',
            regProChe: 'false'
        };
    }
    changeData = (str) => {
        // 禁止用户输入中文的操作
        let temp = ""
        let strA = str.target.value;
        // 进行筛选将数字、英文，限制在Unicode编码前255个
        for (var i = 0; i < strA.length; i++)
            if (strA.charCodeAt(i) > 0 && strA.charCodeAt(i) < 255)
                temp += strA.charAt(i)
        this.setState({
            inval: temp
        })
    }

    chkEmail = (strEmail) => {
        let strEmailA = strEmail.target.value
        console.log(strEmailA)
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(strEmailA)) {
            // alert('电子邮件格式错误')
            this.setState({
                showElem: 'block',
            })
            return false;
        }
        else {
            this.setState({
                showElem: 'none',
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
                                    value={this.state.inval}
                                    onChange={(str) => this.changeData(str)}
                                />
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
                                />
                            </div>
                            <div className='reginputBox '><span>验 证 码</span>
                                <input type="text" placeholder='请输入验证码' className='reginputMod regCaptcha' />
                                <div className='regCaptchaimg '>
                                    <span>获取验证码</span>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <button type="button" name='submit' className='regSubmit'>注 册</button>
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
