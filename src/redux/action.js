import axios from 'axios'
export const get_personal_type='getPersonalData'
export const get_personal_err_type='getPersonalDataErr'
export const set_personal_type='setPersonalData'
//异步获取个人信息
export const getPersonal= () => dispatch =>{
    axios.get('/wk/User_Con/ShowUser').then((suc)=>{
        dispatch({
            type:get_personal_type,
            data:suc.data
        })
    },(err)=>{
        alert('用户信息获取失败')
        dispatch({
            type:get_personal_err_type
        })
    })
}
//设置个人信息
export function setPersonal(...args){
    return{
        type:set_personal_type,
        setData:{
            ...args
        }
    }
}