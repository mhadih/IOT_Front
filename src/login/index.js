import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';
import handleErrors from "../functions/handleError";
import Home from "../home"


export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: String,
      password: String,
      eyeIconColor: String,
      passwordState: String,
      blur: String,
      load: String,
      redirect: Boolean
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
      load: "",
      redirect: false
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

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    const that = this;

    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
    })
      .then(function (response) {
        toast.success('شما با موفقیت وارد شدید');
        console.log(response);
        return response.json();
      })
      .then(handleErrors)
      .then(function (responseJson) {
        toast.success('شما با موفقیت وارد شدید');
        that.setState({
          redirect: true
        });
        console.log("hadi");
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
    if (this.state.redirect == true || localStorage.getItem("Token"))
      return ( <Redirect to="/user/signup" /> );
    else
      return (
        <div>
          <div className={"loading " + this.state.load}>
            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          </div>
          <form onSubmit={this.handleSubmit} className={"login-container " + this.state.blur}>
            <div className="login-logo">login</div>
            <div className="login-inputs">
              <div className="static-parts">
                <div className="group-name login-form-part">
                  <div className="input-icon">
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="input-part">
                    <input 
                      type="text" 
                      className="group-name-input login-input" 
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
                      className="password-input login-input" 
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
            {/* <div className="login-button" onClick={this.login}> */}
            <button type="submit" className="login-btn clickable">login</button>
            {/* </div> */}
            <div className="signup">don't have an accoun yet ?? <Link to={`/user/signup`}>signup</Link></div>
          </form>
        </div>
      );
  }
}