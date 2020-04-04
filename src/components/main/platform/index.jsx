import React, { Component } from 'react'
import './index.css'
import PlatformItem from './platformItem'
export default class platform extends Component {
    render() {
        return (
            <div className='platform w'>
                <p className='main-title-1'>我们专注创新的网络发展</p>
                <p className='main-title-2'>解决你一切想法，高品质的为您完成平台</p>
                <PlatformItem/>
            </div>
        )
    }
}
