import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class visitNav extends Component {
    render() {
        return (
            <ul className="visitNav secondNav">
                <li><Link to='/visit/news' >动态资讯</Link></li>   
                <li><Link to='/visit/introduction' >工作室简介</Link></li>   
                <li><Link to='/visit/join' >加入我们</Link></li>   
            </ul>
        )
    }
}
