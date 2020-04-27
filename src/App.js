import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import PubSub from 'pubsub-js'
import {getPersonal} from './redux/action'
import qs from 'qs'
import store from './redux/store'
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
import Axios from 'axios'
export default class App extends Component {
    constructor(){
        store.dispatch(getPersonal())
        super()
        this.state={
            isSignInShow:false,
            id:""
        }
        //发送切换登录界面的方法，用延时的方式是为了让订阅器先创建
        setTimeout(()=>{
            PubSub.publish("toggleShow",this.toggleShow.bind(this))
        },50)
    }
    //登录页面切换显示或隐藏
    toggleShow(){
        this.setState({isSignInShow:!this.state.isSignInShow})
    }
    componentDidMount(){
        store.subscribe(()=>{
            //当store内有个人信息的数据时将id写入cookie中
            if(Object.keys(store.getState().personalData).length){
                document.cookie=`id=${store.getState().personalData.id}`
            }
        })
    }
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    {/* cookie有没有id，有则出现个人中心的路由，这样相较于store内获取较快些 */}
                    {document.cookie.indexOf('id')!==-1&&<Route path={`/personal/${this.state.id}`} component={Personal}/>}
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
                {this.state.isSignInShow&&<SignIn toggleShow={this.toggleShow.bind(this)}/>}
            </>
        )
    }
}