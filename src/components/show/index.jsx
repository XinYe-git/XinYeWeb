import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Works from "./works"
import PreviousWebsite from './PreviousWebsite'
import PreviousOffice from './PreviousOffice'
export default class show extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/show/works' component={Works}/>
                    <Route path='/show/PreviousWebsite'  component={PreviousWebsite}/>
                    <Route path='/show/PreviousOffice' component={PreviousOffice}/>
                    <Redirect exact from="/show" to="/show/works"/>
                </Switch>
            </div>
        )
    }
}
