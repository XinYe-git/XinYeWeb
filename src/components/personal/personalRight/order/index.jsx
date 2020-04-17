import React, { Component } from 'react'
import './index.css'
export default class order extends Component {
    render() {
        return (
            <div className="personalOrder">
                <div className="Order-title">
                    <div className="Order-title-tr">
                        <div className="Order-title-cell">订单</div>
                        <div className="Order-title-cell">状态</div>
                        <div className="Order-title-cell">价格</div>
                    </div>
                </div>
                <div className="Order-body">
                    <div className="order-item">
                        <div className="order-content">某某公司的微信公众号设计，包括美工组，前端组以及后台组的全部内容</div>
                        <div className="order-state">未完成</div>
                        <div className="order-price">￥222</div>
                    </div>
                    <div className="order-item">
                        <div className="order-content">某某公司的微信公众号设计，包括美工组，前端组以及后台组的全部内容</div>
                        <div className="order-state">未完成</div>
                        <div className="order-price">￥222</div>
                    </div>
                </div>
            </div>
        )
    }
}
