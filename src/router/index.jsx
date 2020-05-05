import React, { Component } from 'react'
import Office from './office'
import {Route,Switch,Redirect} from 'react-router-dom'
import {Page404} from '../components'
import Personal from './Personal'
import {Administrator} from '../components'
import store from '../redux/store'
import {getPersonal,getMessage} from '../redux/action'
export default class index extends Component {
    constructor(){
        super()
        store.dispatch(getMessage())
        store.dispatch(getPersonal())
    }
    getCookie(cname)
    {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) 
            {
                var c = ca[i].trim();
                if (c.indexOf(name)===0) return c.substring(name.length,c.length);
            }
        return "";
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
            <div>
                <Switch>
                    <Route path='/register' />
                    {document.cookie.indexOf('id')!==-1?
                        <Route path="/administrator" component={Administrator}/>
                    :
                        <Redirect to="/404" from="/personal"/>
                    }
                    {document.cookie.indexOf('id')!==-1?
                        <Route path={`/personal/${this.getCookie('id')}`} component={Personal}/>
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
