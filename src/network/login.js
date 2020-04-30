import {request} from "./request";
import qs from "qs";
export function checkLogin(name,password,test) {
  return request({
    method:'post',
    url:'wk/User_Con/LoginDeal',
    data:qs.stringify({
      'name':name,
      'passwd':password,
      'test':test
    })
  })
}

export function checkImage() {
  return request({
    url:'wk/User_Con/Verify',
    responseType:'blob'
  })
}
