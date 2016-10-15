import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId : "login",
    };
    this.loginOn = this.loginOn.bind(this);
  };
  loginOn(e){
    this.setState({userId:"eunyoung" });//나중에 로그인 완료시 유저아이디를 render하는것으로 바꿀 것. 
  };  
  render(){
    return (
      <div>
        <h1 style={{color: "white"}} onClick={this.loginOn} >{this.state.userId}</h1>
        <i> Welcome!</i>
      </div>
    );
  };
};

export default Login;