
import axios from 'axios';
export default function ajax(url,data,type = 'GET') {
  let querystring = '';
  if(data){
    Object.keys(data).forEach(key => {
      const value = data[key];
      querystring += key + '=' + value + '&';
    });
    //去除最后一个&
    querystring.substring(0,querystring.length-1);
    console.log(querystring);
  }

  if(type.toUpperCase() === 'GET'){
    //发送get请求,如果用户通过data传参，我要将data中的数据以查询字符串的方法拼接在url后面
    url + '?' + querystring;
    return axios.get(url);
  }else{
    //发送post请求
    return axios.post(url,querystring,{
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
  }
}

/*
export default function ajax(url,data,type = 'GET') {
  let querystring = ''
  if(data){
    //将传入对象所有可枚举的都存到一个数组中
    Object.keys(data).forEach(key => {
      const value = data[key];
      querystring += key + '=' + value + '&';
    });
    //去掉最后一个&
    querystring = querystring.substring(0,querystring.length-1);
  }

  if(type.toUpperCase() === 'GET'){
    url + '?' + querystring;
    return axios.get(url);
  }else{
    return axios.post(url,querystring,{
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
  }

}*/
