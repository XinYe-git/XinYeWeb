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
    Work,
    Message,
    Ad,
    Service,
    Business
} from './administratorCom'
class administrator extends Component {
    render() {
        if(this.props.personalData.type==="0"){
            alert("你不是管理者")
            window.close()
            return
        }
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
                            <Route path="/administrator/message" component={Message}/>
                            <Route path="/administrator/ad" component={Ad}/>
                            <Route path="/administrator/service" component={Service}/>
                            <Route path="/administrator/business" component={Business}/>
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