import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import PubSub from 'pubsub-js'
import {
    Header,
    Banner,
    Main,
    Visit,
    Show,
    Footer,
    SignIn,
    Business,
    Service
} from '../components'
export default class office extends Component {
    constructor(){
        super()
        this.state={
            isSignInShow:false,
        }
        setTimeout(()=>{
            PubSub.publish("toggleShow",this.toggleShow.bind(this))
        },50)
    }
    //登录页面切换显示或隐藏
    toggleShow(){
        this.setState({isSignInShow:!this.state.isSignInShow})
    }
    render() {
        return (
            <>
                <Header/>
                <Banner/>
                <Switch>
                    <Route path='/main'  component={Main} exact/>
                    <Route path='/visit' component={Visit} />
                    <Route path='/show' component={Show} />
                    <Route path='/business' component={Business}/>
                    <Route path='/service'  component={Service}/>
                    <Redirect exact from="/" to="/main"/>
                    <Redirect exact to="/404"/>
                </Switch>
                <Footer/>
                {this.state.isSignInShow&&<SignIn toggleShow={this.toggleShow.bind(this)}/>}
            </>
        )
    }
}
