import React, { Component } from 'react';
 class Login extends Component {

    constructor(){

        super();
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.send = this.send.bind(this);
        this.state = {login: '', password: ''};
    }

    changeLogin(val){
        console.log(val.target.value)
        this.setState({login: val.target.value});
        
    }

    changePassword(val){
        console.log(val.target.value)
        this.setState({password: val.target.value});
    }

    send(){
        const login = this.state.login;
        const password = this.state.password;

        fetch("https://lab.lectrum.io/redux/api/user/login",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({email: login, password: password})
        })
        .then(function(res){ 
            window.globalState = {}
            window.globalState.result = res ;
            history.push('/home');
        })
        .catch(function(res){ 
            console.log(res) 
        })
        
    }

    render() {
      return (
        <div>
            Login: <input onChange={this.changeLogin} value={this.state.login} />
            Password: <input onChange={this.changePassword} value={this.state.password}  />
            <button type="button" onClick={this.send}>Login</button>
        </div>  
      );
    }
  }

  export default Login;