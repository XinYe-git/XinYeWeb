import React, { Component } from 'react'
<<<<<<< HEAD
import { Route, Redirect, Switch } from 'react-router-dom'
import {
    Header,
    Banner,
    Service,
    Footer
=======
import {Route,Redirect,Switch} from 'react-router-dom'
import {
    Header,
    Banner,
    Main,
    Visit,
    Show,
    Footer,
    SignIn
>>>>>>> show
} from './components'
export default class App extends Component {
    render() {
        return (
            <>
<<<<<<< HEAD
                <Header />
                <Banner />
                <Switch>
                    <Route path='/main'  />
                    <Route path='/visit' />
                    <Route path='/show' />
                    <Route path='/business' />
                    <Route path='/service' />
                    <Route path='/register' />
                    <Redirect exact from="/" to="/main" />
                </Switch>
                <Route path='/signIn' />
                <Service />
                <Footer />
=======
                <Header/>
                <Banner/>
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
>>>>>>> show
            </>
        )
    }
}
