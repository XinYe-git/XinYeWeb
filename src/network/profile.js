import {request} from "./request";
// import qs from "qs";
export function checkProfiledata() {
  return request({
    url:'wk/User_Con/ShowUser',
  })
}
export function checkedDay() {
  return request({
    url:'qk/Register_Con/read',
  })
}

export function checkedToday() {
  return request({
    url:'qk/Register_Con/add',
  })
}