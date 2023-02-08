import { doRequest } from "../utils/netutils"

export const requestApi1 = data => doRequest(`/getUserNameById?userId=${data.userId}`, 'get')
export const GetAllUsers = data =>doRequest("/getAllUser",'post',data)