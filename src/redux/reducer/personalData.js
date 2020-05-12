import {get_personal_type,init_personal_type,get_personal_err_type} from '../action.js'
import {defaultsImg} from '../../App'
const initState={

}
//获取和设置个人数据的方法
export default function personalData(state=initState,action){
    switch(action.type){
        case get_personal_type:
            action.data.head=defaultsImg+action.data.head+"?temp=" + Math.random()
            return Object.assign({},state,action.data)
        case get_personal_err_type:
            return state
        case init_personal_type:
            return {}
        default:
            return state
    }
}