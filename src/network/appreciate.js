import {request} from "./request";
export function backGround2() {
  return request({
    url:'qk/Advertise_Con/show_adve',
  })
}

export function worksSee() {
  return request({
    url:'wk/Works_con/WorksSeek',
  })
}

export function workgive(wid) {
  return request({
    url:'wk/Collect_Con/CollectAdd',
    params:{
      wid
    }
  })
}

    export function worksSeed() {
      return request({
        url:'wk/Collect_Con/UserCollect',
      })
    }