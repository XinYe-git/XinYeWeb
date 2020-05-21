import {request} from "./request";
import qs from "qs";
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

export function workGived() {
  return request({
    url:'wk/Collect_Con/UserCollect'
  })
}

export function workbook() {
  return request({
    url:'ygq/user_task/showOne'
  })
}

export function changename(name) {
  return request({
    method:'post',
    url:'wk/User_Con/ReviseDeal',
    data:qs.stringify({
      'value':name,
      'key':'name'
      // 'head':head
    })
  })
}

export function changetele(tele) {
  return request({
    method:'post',
    url:'wk/User_Con/ReviseDeal',
    data:qs.stringify({
      'value':tele,
      'key':'tele'
    })
  })
}

export function changeprofessions(professions) {
  return request({
    method:'post',
    url:'wk/User_Con/ReviseDeal',
    data:qs.stringify({
      'value':professions,
      'key':'professions'
    })
  })
}

export function changesex(sex) {
  return request({
    method:'post',
    url:'wk/User_Con/ReviseDeal',
    data:qs.stringify({
      'value':sex,
      'key':'sex'
    })
  })
}

export function changemail(mail) {
  return request({
    method:'post',
    url:'wk/User_Con/ReviseDeal',
    data:qs.stringify({
      'value':mail,
      'key':'mail'
    })
  })
}

export function changehead(formData) {
  return request({
    method:'post',
    headers:{"Content-Type":"multipart/form-data"},
    url:'wk/User_Con/ReviseDeal',
    data: formData

  })
}