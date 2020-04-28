import React, { Component } from 'react'
import Office from './office'
import {Route,Switch,Redirect} from 'react-router-dom'
import {Page404} from '../components'
import {Administrator} from '../components'
export default class index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/register' />
                    {document.cookie.indexOf('id')!==-1?
                        <Route path="/administrator" component={Administrator}/>
                    :
                        <Redirect to="/404" from="/personal"/>
                    }
                    <Route component={Page404} path="/404" exact/>
                    <Route component={Office} path='/'/>
                </Switch>
            </div>
        )
    }
}
