import React, { Component } from 'react'
import PreviousWebsiteItem from './PreviousWebsiteItem'
import "./index.css"
export default class PreviousWebsite extends Component {
    render() {
        return (
            <div className="PreviousWebsite">
                <div className="PreviousWebsite-title">往届工作室</div>
                <PreviousWebsiteItem/>
            </div>
        )
    }
}
