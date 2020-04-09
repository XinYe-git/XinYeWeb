import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class visitNav extends Component {
    render() {
        return (
            <ul className="showNav secondNav">
                <li><Link to='/show/works' target='_blank'>案例作品</Link></li>   
                <li><Link to='/show/PreviousWebsite' target='_blank'>往届官网</Link></li>   
                <li><Link to='/show/PreviousOffice' target='_blank'>往届工作室</Link></li>   
            </ul>
        )
    }
}
