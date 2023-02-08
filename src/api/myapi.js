import { doRequest } from "../utils/netutils"

export const requestApi1 = data => doRequest('/getUserNameById', 'get',data)
export const GetAllUsers = data =>doRequest("/getAllUser",'post',data)