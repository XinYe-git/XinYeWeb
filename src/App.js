import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import PubSub from 'pubsub-js'
import {connect} from 'react-redux'
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
class App extends Component {
    constructor(){
        super()
        this.state={
            isSignInShow:false
        }
        //发送切换登录界面的方法
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
                <Switch>
                    {/* 判断store中是否有信息，有则出现个人中心的路由 */}
                    {Object.keys(this.props.personalData).length&&<Route path={`/personal/${this.props.personalData.id}`} component={Personal}/>}
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
                {this.state.isSignInShow?<SignIn toggleShow={this.toggleShow.bind(this)}/>:<></>}
            </>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(App)