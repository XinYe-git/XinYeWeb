import React, { Component } from 'react'
import "./index.css"
import WorksItem from "./worksItem"
import WorksPage from "./worksPage"
export default class works extends Component {
    render() {
        return (
            <div className="works">
                <div className="works-title">实例作品</div>
                <WorksItem/>
                <WorksPage/>
            </div>
        )
    }
}
