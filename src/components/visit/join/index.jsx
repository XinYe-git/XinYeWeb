import React, { Component } from 'react'
import "./index.css"
import Flow from "./flow"
import JoinDetail from "./joinDetail"
export default class join extends Component {
    render() {
        return (
            <div className="join">
                <div className="news-title">加入我们</div>
                <Flow/>
                <JoinDetail/>
            </div>
        )
    }
}
