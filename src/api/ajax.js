
//封装axios的ajax模块,返回值是promise对象

import axios from 'axios';
export default function ajax(url,data,type = 'GET') {
  let querystring = '';
  if(data){
    //将传入的对象所有可枚举的属性保存一个数组中返回
    Object.keys(data).forEach(key => {  //data是一个对象,如{username:'xxx'}
      //获取属性值
      const value = data[key];          //key 相当于data中的属性username  value相当于xxx
      querystring += key + '=' + value + '&';  //querystring是一个查询字符串   username=xxx&pwd=123&
    });
    //去除多余的&
    querystring = querystring.substring(0,querystring.length-1);
    console.log(querystring);
  }
  if(type.toUpperCase() === 'GET') {
    url += "?" + querystring;
    return axios.get(url);
  }else{
    //发送的是post请求
    return axios.post(url,querystring,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}
