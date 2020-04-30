import React, { Component } from 'react'
import AdministratorHead from './administratorHead/index'
import {connect} from 'react-redux'
import {getPersonal} from '../../redux/action'
import {Route,Switch,Redirect} from 'react-router-dom'
import './index.css'
import AdministratorNav from './administratorNav' 
import {
    User,
    Order,
    Work
} from './administratorCom'
class administrator extends Component {
    componentDidMount(){
        this.props.getPersonal()
    }
    render() {
        return (
            <div className="administrator">
                <AdministratorHead/>
                <div className="administrator-outter">
                    <AdministratorNav/>
                    <div className="administrator-router">
                        <Switch>
                            <Route path="/administrator/user" component={User}/>
                            <Route path="/administrator/order" component={Order}/>
                            <Route path="/administrator/works" component={Work}/>
                            <Redirect from="/administrator" to="/administrator/user" exact/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps,{getPersonal})(administrator)