

handleChange = (name,val) => {
  //更新
  this.setState({
    [name]:val
  })
}
register = async () => {
  const {username,password,rePassword,type} = this.state;
  if(password === rePassword){
    //发送ajax请求
    const data = await reqRegister({username,password,type});

  }else{
    res.json('两次密码不一致,请重试')
  }
}

goLogin = () => {
  this.props.history.replace('/login');
}