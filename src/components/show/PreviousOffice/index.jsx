import React, { Component } from 'react'
import PreviousOfficeItem from "./PreviousOfficeItem"
import PreviousOfficePage from "./PreviousOfficePage"
export default class PreviousOffice extends Component {
    render() {
        return (
            <div className="PreviousOffice">
                <div className="PreviousOffice-title">往届工作室</div>
                <PreviousOfficeItem/>
                <PreviousOfficePage/>
            </div>
        )
    }
}
