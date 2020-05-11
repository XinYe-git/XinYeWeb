import React, { Component } from 'react'
import "./index.css"
export default class page extends Component {
    render() {
        return (
            <div className="noFound">
                <img src={require("../header/logo.png")} alt=""/>
                <div class="col-md-6 align-self-center">
                    <h1>404</h1>
                    <h2>UH OH! 页面丢失</h2>
                    <p>您所寻找的页面不存在。你可以点击下面的按钮，返回主页。
                    </p>
                    <a href="/">返回首页</a>
                </div>
            </div>
        )
    }
}