import {request} from "./request";
export function backGround() {
  return request({
    url:'qk/Advertise_Con/show_adve',
  })
}
// export function getHomeGoods(type,page) {
//   return request({
//     url:'/home/data',
//     params:{
//       type,
//       page
//     }
//   })
//
// }
