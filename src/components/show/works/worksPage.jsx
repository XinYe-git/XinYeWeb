import React, { Component } from 'react'
export default class worksPage extends Component {
    constructor(){
        super()
        this.page=1
    }
    render() {
        return (
            <ul className="Page">
                <li><a href="1" className="Previous">{"<"}</a></li>
                <li><a href="1" className="More">{"..."}</a></li>
                <li><a href="1" className="PageNow">1</a></li>
                <li><a href="1" className="More">{"..."}</a></li>
                <li><a href="1" className="Previous">{">"}</a></li>
            </ul>
        )
    }
}
