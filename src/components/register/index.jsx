import React, { Component } from 'react'

import './main.css'

export default class register extends Component {
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
                            <div className='reginputBox'>用 户 名<input type="text" placeholder='请设置用户名' className='reginputMod regUserName' /></div>
                            <div className='reginputBox'>邮 &emsp; 箱<input type="text" placeholder='请填写邮箱号' name="regMail" size="30" className='reginputMod regMail' /></div>
                            <div className='reginputBox'>密 &emsp; 码<input type="password" maxlength="14" placeholder='6-14个字符组成，区分大小写' className='reginputMod regPassword' /></div>
                            <div className='reginputBox '><span>验 证 码</span>
                                <input type="text" placeholder='请输入验证码' className='reginputMod regCaptcha' />
                                <div className='regCaptchaimg '>
                                    <span>获取验证码</span>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <button type="button" name='submit' className='regSubmit'>注册</button>
                            <div className='regProtocol'>
                                <input type="checkbox"  className='regProChe' />&ensp;
                                <span>阅读并接受<a href="/">《新叶用户协议》</a>及<a href="/">《新叶隐私保护声明》</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
