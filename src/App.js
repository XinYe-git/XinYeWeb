import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import {
    Header,
    Banner,
    Main,
    Visit,
    Show,
    Footer,
    SignIn
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
