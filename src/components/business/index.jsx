import React, { Component } from 'react'

import Summary from './summary'
import BusProcess from './busProcess'

export default class business extends Component {
    render() {
        return (
            <div className='centlay'>
                <Summary />
                <BusProcess />
            </div>
        )
    }
}
