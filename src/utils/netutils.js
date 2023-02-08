import axios from 'axios'

export function doRequest(url, method, data) {
   return axios({
        method,
        url:'https://mock.apifox.cn/m1/2264671-0-default'+url,
        data,
        headers: { 
            'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)', 
            'Content-Type': 'application/json', 
            'Accept': '*/*', 
            'Host': 'mock.apifox.cn', 
            'Connection': 'keep-alive'
         },
    });
}

