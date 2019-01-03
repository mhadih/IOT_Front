import React from "react";
import { Link } from "react-router-dom";
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
      members: [String]
    };
    this.addMember = this.addMember.bind(this);
    this.handleMembers = this.handleMembers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addMember() {
    let members = this.state.members;
    members.push("");
    this.setState( { members: members });
  }

  componentWillMount() {
    let members = [];
    members.push("");
    this.setState({ members: members });
  }

  handleChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    })
  }   

  handleMembers(event, index) {
    let target = event.target;
    let value = target.value;

    let members = this.state.members;
    members[index] = value;

    this.setState({
      members: members
    });
  }

  handleSubmit() {
    const data = this.state;
    let that = this;

    fetch('/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: data })
    })
      .then(res => {
        if (res.status === 200) {
          
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
    return (
      <div>
        <div class="signup-container">
          <div class="signup-logo">SIGNUP</div>
          <form onSubmit={this.handleSubmit} class="inputs">
            <div class="static-parts">
              <div class="group-name signup-form-part">
                <div class="input-icon">
                  <i class="fa fa-users fa-2x" aria-hidden="true" />
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
              <div class="thing-speak signup-form-part">
                <div class="input-icon">
                  <i class="fa fa-thermometer-empty fa-2x" aria-hidden="true" />
                </div>
                <div class="input-part">
                  <input
                    type="text"
                    class="thing-speak-input"
                    placeholder="thing speak channel"
                    name="channelId"
                    onChange={this.handleChange}
                    value={this.state.channelId}
                  />
                </div>
              </div>
              <div class="password signup-form-part">
                <div class="input-icon">
                  <i class="fa fa-unlock-alt fa-2x" aria-hidden="true" />
                </div>
                <div class="input-part">
                  <input
                    type="password"
                    class="password-input"
                    placeholder="password"
                    name="password"
                  />
                </div>
                <div
                  class="input-icon eye-icon clickable"
                  onclick="togglePass()"
                >
                  <i class="fa fa-eye" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div class="dynamic-parts">
              {memberFields}
            </div>
          </form>
          <div class="add-member clickable" onClick={this.addMember}>
            +
          </div>
          <div class="signup-button">
            <button class="signup-btn clickable" >signup</button>
          </div>
          <div class="login">
            already have an acount ?? <Link to={`/user/login`}>login</Link>
          </div>
        </div>
      </div>
    );
  }
}
