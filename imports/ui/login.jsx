import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class login extends Component {
  register = () => {
    Accounts.createUser({
      email: this.nameUser.value,
        password: this.passwordUser.value
    }, (res) => {
      if(res === undefined) {
        this.props.router.push('/home')
      } else {
        console.log('error')
      }
    })
  }

  login = () => {
    const name = this.nameUserLogin.value
    const pass = this.passwordUserLogin.value
    Meteor.loginWithPassword(name, pass, (res)=> {
      if (res === undefined ) {
        this.props.router.push('/home')
      } else {
        console.log('error')
      }
    })
  } 
  render() {
    return (
      <div className="container">
        <header>
          <h1 className='Title-hot'>Chat Hot</h1>
          <form action="">
            <div className='container-form'>
              <div className='container-register'>
                <h1>register</h1>
                <input ref={(input) => { this.nameUser = input }} type="text"/>
                <input ref={(input) => { this.passwordUser = input }} type="password"/>
                <input type="button" value='registrar' onClick={() => this.register()}/>
              </div>
              <div className='container-login'>
                <h1>login</h1>
                <input ref={(input) => { this.nameUserLogin = input }} type="text"/>
                <input ref={(input) => { this.passwordUserLogin = input }} type="password"/>
                <input type="button" value='ENTRAR' onClick={() => this.login()}/>
              </div>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
export default login