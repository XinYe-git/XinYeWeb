import React, { Component } from 'react'
import IntroductionItem from "./introductionItem"
import "./index.css"
export default class introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <div className="introduction-title">工作室介绍</div>
                <IntroductionItem />
            </div>
        )
    }
}
