import React, { Component } from 'react'

export default class more extends Component {
    render() {
        return (
            <div className="more">
                <img src={require('./arrowhead.png')} alt="" className="more-img"/>
                <img src={require('./arrowhead.png')} alt="" className="more-img"/>
                <span className="more-words">更多</span>
            </div>
        )
    }
}
