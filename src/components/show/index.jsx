import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import './index.css'
import Works from "./works"
import PreviousWebsite from './PreviousWebsite'
import PreviousOffice from './PreviousOffice'
export default class show extends Component {
    render() {
        return (
            <div className="show">
                <Switch>
                    <Route path='/show/works' component={Works} exact/>
                    <Route path='/show/PreviousWebsite'  component={PreviousWebsite} exact/>
                    <Route path='/show/PreviousOffice' component={PreviousOffice} exact/>
                    <Redirect exact from="/show" to="/show/works"/>
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}
