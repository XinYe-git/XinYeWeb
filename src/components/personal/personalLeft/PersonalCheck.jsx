import React, { Component } from 'react'

export default class PersonalCheck extends Component {
    render() {
        return (
            <div className='PersonalCheck'>
                <div className="PersonalCheckData">
                    <div className="personalImg"></div>
                    <p className="personalName">用户123</p>
                    <p className="personalDataOther">
                        <span className="personalAddress">常德</span> | <span className="personalProfession">职业</span>
                    </p>
                </div>
                <div className="PersonalButton">签到</div>
            </div>
        )
    }
}
