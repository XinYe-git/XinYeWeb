import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import './index.css'
import News from "./news"
import Introduction from './introduction'
import Join from './join'
export default class visit extends Component {
    render() {
        return (
            <div className="visit">
                <Switch>
                    <Route path='/visit/news' component={News}/>
                    <Route path='/visit/introduction' component={Introduction}/>
                    <Route path='/visit/join' component={Join}/>
                    <Redirect exact from="/visit" to="/visit/news"/>
                </Switch>
            </div>
        )
    }
}
