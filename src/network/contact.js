import {request} from "./request";
export function getProblom(Tele,Content) {
  return request({
    url:'ygq/user_ques/add',
    params:{
      Tele,
      Content
    }
  })
}

export function getCity() {
  return request({
    url:'wk/User_Con/GetCity'
  })
}
