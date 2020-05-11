import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class more extends Component {
    render() {
        return (
            <Link className="more" to="/show/works">
                <img src={require('./arrowhead.png')} alt="" className="more-img"/>
                <img src={require('./arrowhead.png')} alt="" className="more-img"/>
                <span className="more-words">更多</span>
            </Link>
        )
    }
}
