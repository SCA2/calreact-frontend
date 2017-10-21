import React from 'react';
import $ from 'jquery';

class Login extends React.Component {
  
  handleLogin = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/auth/sign_in',
      data: {
        email: this.email.value,
        password: this.password.value
      }
    })
    .done((response, status, jqXHR) => {
      sessionStorage.setItem('user',
        JSON.stringify({
          'access-token': jqXHR.getResponseHeader('access-token'),
          client: jqXHR.getResponseHeader('client'),
          uid: response.data.uid
        }));
      this.props.history.push('/');
    })
  }

  render() {
    return(
      <div>
        <h2>Sign in</h2>
        <form onSubmit={this.handleLogin} >
          <p>
            <label for="email">Email</label>
            <input id="email" name="email" ref={input => this.email = input} />
          </p>
          <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" ref={input => this.password = input} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;