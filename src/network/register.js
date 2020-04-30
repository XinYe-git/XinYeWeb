import {request} from "./request";
import qs from "qs";
export function check(mail) {
  return request({
    method:'post',
    url:'wk/User_Con/Mail',
    data:qs.stringify({
      'mail':mail
    })
  })
}
export function admitValue(name,password,mail,test) {
  return request({
    method:'post',
    url:'wk/User_Con/RegisterDeal',
    data:qs.stringify({
      'name':name,
      'passwd':password,
      'mail':mail,
      'test':test
    })
  })
}
export function checkMail(mail) {
  return request({
    url:'wk/User_Con/Label',
    params:{
      key:'mail',
      value:mail,

    }
  })
}

// export function checkName(name) {
//   return request({
//     url:'wk/User_Con/Label',
//     params:{
//       key:'name',
//       value:name,
//
//     }
//   })
// }

