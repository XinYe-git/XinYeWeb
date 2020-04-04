import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import {
    Header,
    Banner,
    Main,
    Footer
} from './components'
export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Banner/>
                <Switch>
                    <Route path='/main' exact component={Main}/>
                    <Route path='/visit' exact/>
                    <Route path='/show' exact/>
                    <Route path='/business' exact/>
                    <Route path='/service' exact/>
                    <Redirect exact from="/" to="/main"/>
                </Switch>
                <Footer />
            </>
        )
    }
}
