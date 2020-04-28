import axios from 'axios'
export const get_personal_type='getPersonalData'
export const get_personal_err_type='getPersonalDataErr'
export const init_personal_type='initPersonalData'
//异步获取个人信息
export const getPersonal= (callback=()=>{}) => dispatch =>{
    axios.get('/wk/User_Con/ShowUser').then((suc)=>{
        if(suc.data.retuen!=="请先进行登录"){
            dispatch({
                type:get_personal_type,
                data:suc.data
            })
            callback()
        }
    },(err)=>{
        alert('用户信息获取失败')
        dispatch({
            type:get_personal_err_type
        })
    })
}
//初始化个人信息
export function initPersonal(){
    return{
        type:init_personal_type
    }
}