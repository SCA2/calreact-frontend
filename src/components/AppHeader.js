import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';

class AppHeader extends React.Component {

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http:/localhost:3000/auth/validate_token',
      dataType: 'JSON',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .fail(() => {
      this.props.history.push('/login');
    })
  }

  handleSignOut = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/auth/sign_out',
      data: JSON.parse(sessionStorage.user)
    })
    .done(() => {
      sessionStorage.removeItem('user');
      this.props.history.push('/login');
    })
  }
  
  render() {
    if(sessionStorage.getItem('user')) {
      return(
        <div>
          {sessionStorage.getItem('user') && (
            <p>
              {JSON.parse(sessionStorage.getItem('user')).uid}
              &nbsp;|&nbsp;
              <a href='#' onClick={this.handleSignOut}>Sign out</a>
            </p>
          )}
          <Link to='/'>
            <h1>CalReact</h1>
          </Link>
        </div>
      )
    } else {
      return(
        <Redirect to='/login' />
      )
    }
  }
}

export default AppHeader;