import axios from 'axios'
export const get_personal_type='getPersonalData'
export const get_personal_err_type='getPersonalDataErr'
export const init_personal_type='initPersonalData'
export const get_massage="getMassage"
export const get_massage_err="getMassageErr"
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
//获取用户公告
export const getMessage=(callback=()=>{}) => dispatch =>{
    axios.get("/qk/Message_Con/showusermess").then((suc)=>{     
        if(suc.data.message.length!==0){
            dispatch({
                type:get_massage,
                message:suc.data.message
            })
        }else{
            dispatch({
                type:get_massage_err
            })
        }
        callback()
    }).catch((err)=>{
        dispatch({
            type:get_massage_err
        })
    })
}