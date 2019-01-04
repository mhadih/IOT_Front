import React from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import "./style.css";
import { MemberField } from "./member-field";
import handleErrors from "../functions/handleError";

export class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: String,
      channelId: String,
      password: String,
      members: [String],
      eyeIconColor: String,
      passwordState: String,
      redirect: Boolean
    };
    this.addMember = this.addMember.bind(this);
    this.handleMembers = this.handleMembers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePass = this.togglePass.bind(this);
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

  addMember() {
    let members = this.state.members;
    members.push("");
    this.setState( { members: members });
  }

  componentDidMount() {
    let members = [];
    members.push("");
    
    this.setState({
      members: members,
      username: "",
      password: "",
      eyeIconColor: "darkgrey",
      passwordState: "password",
      redirect: false
    });
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    console.log(value);
    this.setState({
      [name]: value
    })
  }   

  handleMembers(event, index) {
    let target = event.target;
    let value = target.value;

    let members = this.state.members;
    members[index] = value;

    console.log(members[index]);

    this.setState({
      members: members
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    let that = this;

    console.log(data);
    fetch('/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
    })
      .then(res => {
        if (res.status === 200) {
          that.setState({
            redirect: true
          });
          toast.success('شما با موفقیت ثبت نام شدید!');
        }
        return res.json();
      })
      .then(handleErrors)
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const memberFields = this.state.members.map( (value,index) => {
      return <MemberField handleMembers={this.handleMembers} name={value} index={index+1} key={index} />
    });
    if (this.state.redirect == true)
      return ( <Redirect to="/user/login" /> );
    else if (localStorage.getItem("Token"))
      return ( <Redirect to="/home/dashboard" /> );
    else
      return (
        <div>
          <form onSubmit={this.handleSubmit} className="signup-container">
            <div className="signup-logo">SIGNUP</div>
            <div  className="signup-inputs">
              <div className="static-parts">
                <div className="group-name signup-form-part">
                  <div className="input-icon">
                    <i className="fa fa-users fa-2x" aria-hidden="true" />
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
                <div className="thing-speak signup-form-part">
                  <div className="input-icon">
                    <i className="fa fa-thermometer-empty fa-2x" aria-hidden="true" />
                  </div>
                  <div className="input-part">
                    <input
                      type="text"
                      className="thing-speak-input"
                      placeholder="thing speak channel"
                      name="channelId"
                      onChange={this.handleChange}
                      value={this.state.channelId}
                    />
                  </div>
                </div>
                <div className="password signup-form-part">
                  <div className="input-icon">
                    <i className="fa fa-unlock-alt fa-2x" aria-hidden="true" />
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
                  <div
                    className="input-icon eye-icon clickable"
                    onClick={this.togglePass}
                  >
                    <i className={"fa fa-eye " + this.state.eyeIconColor} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="dynamic-parts">
                {memberFields}
              </div>
            </div>
            <div className="add-member clickable" onClick={this.addMember}>
              +
            </div>
            <div className="signup-button">
              <input type="submit" className="signup-btn clickable" value="signup" />
            </div>
            <div className="login">
              already have an acount ?? <Link to={`/user/login`}>login</Link>
            </div>
          </form>
        </div>
      );
  }
}
