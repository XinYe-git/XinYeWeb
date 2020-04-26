import React, { Component } from 'react'
export default class newsPage extends Component {
    constructor(){
        super()
        this.page=1
    }
    render() {
        return (
            <ul className="Page">
                <li><div className="Previous">{"<"}</div></li>
                <li><div className="More">{"..."}</div></li>
                <li><div className="PageNow">1</div></li>
                <li><div className="More">{"..."}</div></li>
                <li><div className="Previous">{">"}</div></li>
            </ul>
        )
    }
}
