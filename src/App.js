import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import {
    Header,
    Banner,
    Main,
    Visit,
    Show,
    Footer,
    SignIn,
    Personal
} from './components'
export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path='/personal/:userId' component={Personal}/>
                    <Route component={Banner}/>
                </Switch>
                <Switch>
                    <Route path='/main'  component={Main}/>
                    <Route path='/visit' component={Visit}/>
                    <Route path='/show' component={Show}/>
                    <Route path='/business' />
                    <Route path='/service' />
                    <Route path='/register' />
                    <Redirect exact from="/" to="/main"/>
                </Switch>
                <Footer/>
                <SignIn />
            </>
        )
    }
}
