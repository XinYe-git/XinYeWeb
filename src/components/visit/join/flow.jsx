import React, { Component } from 'react'

export default class flow extends Component {
    render() {
        return (
            <div className="flow">
                <div className="flow-title">招新流程</div>
                <div className="flow-content">
                    <div className="flow-content-item">线上宣传</div>
                    <div className="flow-content-item">线下宣传</div>
                    <div className="flow-content-item">入群领取学习资料</div>
                    <div className="flow-content-item">自学资料、视频</div>
                    <div className="flow-content-item">领取考题,填写信息</div>
                    <div className="flow-content-item">写考核题</div>
                    <div className="flow-content-item">提交考题</div>
                    <div className="flow-content-item">审核面试</div>
                </div>
            </div>
        )
    }
}
