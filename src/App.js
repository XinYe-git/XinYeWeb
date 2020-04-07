import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import {
    Header,
    Banner,
    Main,
    Visit,
    Footer
} from './components'
export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Banner/>
                <Switch>
                    <Route path='/main'  component={Main}/>
                    <Route path='/visit' component={Visit}/>
                    <Route path='/show' />
                    <Route path='/business' />
                    <Route path='/service' />
                    <Route path='/register' />
                    <Redirect exact from="/" to="/main"/>
                </Switch>
                <Route path='/signIn' />
                <Footer />
            </>
        )
    }
}
