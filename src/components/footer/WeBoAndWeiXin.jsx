import React, { Component } from 'react'

export default class WeBoAndWeiXin extends Component {
    render() {
        return (
            <div className="WeBoAndWeiXin">
                <a href="/"><img src={require('./weixin.png')} alt="" className="weixin"/></a>
                <a href="/"><img src={require('./weibo.png')} alt="" className="weibo"/></a>
            </div>
        )
    }
}
