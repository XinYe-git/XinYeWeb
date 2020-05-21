import {request} from "./request";
export function Profiledatachecked() {
  return request({
    url:'wk/User_Con/ShowUser',
  })
}