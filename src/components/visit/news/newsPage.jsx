import React, { Component } from 'react'
export default class newsPage extends Component {
    constructor(){
        super()
        this.page=1
    }
    render() {
        console.log(this.props)
        return (
            <ul className="newPage">
                <li><a href="1" className="newsPrevious">{"<"}</a></li>
                <li><a href="1" className="newsMore">{"..."}</a></li>
                <li><a href="1" className="newPageNow">1</a></li>
                <li><a href="1" className="newsMore">{"..."}</a></li>
                <li><a href="1" className="newsPrevious">{">"}</a></li>
            </ul>
        )
    }
}
