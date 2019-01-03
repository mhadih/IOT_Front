import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';
import handleErrors from "../functions/handleError";


export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: String,
      password: String,
      eyeIconColor: String,
      passwordState: String,
      blur: String,
      load: String
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePass = this.togglePass.bind(this);
  }

  login() {
    this.setState({
      blur: "blur",
      load: "loading-on"
    })
  }

  togglePass() {
    let color;
    let state;
    if (this.state.eyeIconColor == "black") 
      color = "darkgrey";
    else 
      color = "black";

    if (this.state.passwordState == "password") 
      state = "text";
    else 
      state = "password";
    this.setState({
      eyeIconColor: color,
      passwordState: state
    })
  }

  componentDidMount() {
    this.setState({
      username: "",
      password: "",
      eyeIconColor: "darkgrey",
      passwordState: "password",
      blur: "",
      load: ""
    });
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
        <div className={"loading " + this.state.load}>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
        <form onSubmit={this.handleSubmit} className={"login-container " + this.state.blur}>
          <div className="login-logo">login</div>
          <div className="inputs">
            <div className="static-parts">
              <div className="group-name login-form-part">
                <div className="input-icon">
                  <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                </div>
                <div className="input-part">
                  <input 
                    type="text" 
                    className="group-name-input" 
                    placeholder="group name" 
                    name="username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </div>
              </div>
              <div className="password login-form-part">
                <div className="input-icon">
                  <i className="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                </div>
                <div className="input-part">
                  <input 
                    type={this.state.passwordState} 
                    className="password-input" 
                    placeholder="password" 
                    name="password" 
                    onChange={this.handleChange}
                    value={this.state.password} 
                  />
                </div>
                <div className="input-icon clickable" onClick={this.togglePass}>
                  <i className={"fa fa-eye " + this.state.eyeIconColor} aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="login-button" onclick="login()">
            <button type="submit" className="login-btn clickable">login</button>
          </div>
          <div className="signup">don't have an accoun yet ?? <Link to={`/user/signup`}>signup</Link></div>
        </form>
      </div>
    );
  }
}