import React, { Component } from 'react'
import './index.css'
import FooterBd from './footerBd'
import FooterFt from './footerFt'
import WeBoAndWeiXin from './WeBoAndWeiXin'
import OfficialAccounts from './OfficialAccounts'
export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="w footer-inner">
                    <FooterBd />
                    <FooterFt />
                    <WeBoAndWeiXin />
                    <OfficialAccounts />
                </div>
            </div>
        )
    }
}
