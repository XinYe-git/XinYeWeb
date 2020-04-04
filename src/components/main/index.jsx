import React, { Component } from 'react'
import Platform from './platform/index'
import Appreciation from './appreciation'
import './index.css'
export default class main extends Component {
    render() {
        return (
            <>
                <Platform />
                <Appreciation />
            </>
        )
    }
}
