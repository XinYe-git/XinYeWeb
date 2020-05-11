import React, { Component } from 'react'
import IntroductionItem from "./introductionItem"
import "./index.css"
export default class introduction extends Component {
    componentDidMount(){
        // chrome
        document.body.scrollTop = 0
        // firefox
        document.documentElement.scrollTop = 0
        // safari
        window.pageYOffset = 0
    }
    render() {
        return (
            <div className="introduction">
                <div className="introduction-title">工作室介绍</div>
                <IntroductionItem />
            </div>
        )
    }
}
