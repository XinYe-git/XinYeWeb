import React, { Component } from 'react'

export default class footerBd extends Component {
    render() {
        return (
            <ul className="footer-bd">
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <img src={require('./phone.png')} alt=""/><span>移动端</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>关于我们</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>加入新叶</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>用户协议</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>隐私政策</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>侵权申诉</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>企业服务</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>帮助中心</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>联系我们</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>中文</span>
                    </a>
                </li>
                <li className="footer-bd-item">
                    <a href="/" className="footer-bd-item-a">
                        <span>English</span>
                    </a>
                </li>
            </ul>
        )
    }
}
