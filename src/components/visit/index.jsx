import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import News from "./news"
import Introduction from './introduction'
export default class visit extends Component {
    render() {
        return (
            <div className="visit">
                <Switch>
                    <Route path='/visit/news' component={News}/>
                    <Route path='/visit/introduction' component={Introduction}/>
                    <Route path='/visit/join' />
                    <Redirect exact from="/visit" to="/visit/news"/>
                </Switch>
            </div>
        )
    }
}
