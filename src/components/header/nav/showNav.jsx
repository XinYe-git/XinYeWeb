import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class visitNav extends Component {
    render() {
        return (
            <ul className="showNav secondNav">
                <li><Link to='/show/works' >案例作品</Link></li>   
                <li><Link to='/show/PreviousWebsite' >往届官网</Link></li>   
                <li><Link to='/show/PreviousOffice' >往届工作室</Link></li>   
            </ul>
        )
    }
}
