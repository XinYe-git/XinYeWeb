import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {
    Header,
    Banner,
    Business,
    Footer
} from './components'
export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <Switch>
                    <Route path='/main'/>
                    <Route path='/visit' />
                    <Route path='/show' />
                    <Route path='/business'  component={Business}  />
                    <Route path='/service'  />
                    <Route path='/register' />
                    <Redirect exact from="/" to="/main" />
                </Switch>
                <Route path='/signIn' />
                <Footer />
            </>
        )
    }
}
