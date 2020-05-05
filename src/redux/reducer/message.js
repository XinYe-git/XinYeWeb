import {
    get_massage,
    get_massage_err,
}from "../action"
const initMessage=[]
export default function Message(message=initMessage,action){  
    switch(action.type){
        case get_massage_err:
            return message
        case get_massage:       
            return Object.assign([],initMessage,action.message)
        default:
            return message
    }
}