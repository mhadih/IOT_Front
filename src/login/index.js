import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';
import './main.js';
import handleErrors from "../functions/handleError";


export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: String,
      password: String
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const data = this.state;

    fetch('/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
    })
      .then(function (response) {
        return response.json();
      })
      .then(handleErrors)
      .then(function (responseJson) {
        localStorage.setItem('Token', responseJson.data.Token);
      })
      .then(function () {
        toast.success('شما با موفقیت وارد شدید');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div class="loading">
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
        <form onSubmit={this.handleSubmit} class="login-container">
          <div class="login-logo">login</div>
          <div class="inputs">
            <div class="static-parts">
              <div class="group-name login-form-part">
                <div class="input-icon">
                  <i class="fa fa-users fa-2x" aria-hidden="true"></i>
                </div>
                <div class="input-part">
                  <input 
                    type="text" 
                    class="group-name-input" 
                    placeholder="group name" 
                    name="username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </div>
              </div>
              <div class="password login-form-part">
                <div class="input-icon">
                  <i class="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                </div>
                <div class="input-part">
                  <input 
                    type="password" 
                    class="password-input" 
                    placeholder="password" 
                    name="password" 
                    onChange={this.handleChange}
                    value={this.state.password} 
                  />
                </div>
                <div class="input-icon eye-icon clickable" onclick="togglePass()">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="login-button" onclick="login()">
            <button class="login-btn clickable">login</button>
          </div>
          <div class="signup">don't have an accoun yet ?? <Link to={`/user/signup`}>signup</Link></div>
        </form>
      </div>
    );
  }
}