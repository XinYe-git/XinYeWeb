import { combineReducers } from 'redux'
import {get_personal_type,set_personal_type,get_personal_err_type} from '../action.js'
const initState={

}
//获取和设置个人数据的方法
export default function personalData(state=initState,action){
    switch(action.type){
        case get_personal_type:
            return Object.assign({},state,action.data)
        case get_personal_err_type:
            return state
        case set_personal_type:
            return Object.assign({},state,action.setData)
        default:
            return state
    }
}