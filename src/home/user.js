import React from "react";
import { Link } from 'react-router-dom';
// import "./style.css";

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="wrapper">
        <div
          class="sidebar"
          data-color="orange"
          data-image="../assets/img/sidebar-5.jpg"
        >
          <div class="sidebar-wrapper">
            <div class="logo">
              <a href="http://www.creative-tim.com" class="simple-text">
                IOT
              </a>
            </div>
            <ul className="nav">
              <li className="nav-item active">
                <Link to={`/home/dashboard`} className="nav-link">
                  <i className="nc-icon nc-chart-pie-35" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to={`/home/user`} className="nav-link">
                  <i className="nc-icon nc-circle-09" />
                  <p>User Profile</p>
                </Link>
              </li>

              <li>
                <Link to={`/home/typography`} className="nav-link">
                  <i className="nc-icon nc-paper-2" />
                  <p>Typography</p>
                </Link>
              </li>

              <li>
                <Link to={`/home/map`} className="nav-link">
                  <i className="nc-icon nc-pin-3" />
                  <p>Maps</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-panel">
          <nav class="navbar navbar-expand-lg " color-on-scroll="500">
            <div class=" container-fluid  ">
              <a class="navbar-brand" href="#pablo">
                {" "}
                User{" "}
              </a>
              <button
                href=""
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-bar burger-lines" />
                <span class="navbar-toggler-bar burger-lines" />
                <span class="navbar-toggler-bar burger-lines" />
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul class="nav navbar-nav mr-auto">
                  <li class="nav-item" />
                  <li class="dropdown nav-item" />
                  <li class="nav-item" />
                </ul>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item" />
                  <li class="nav-item dropdown" />
                  <li class="nav-item">
                    <a class="nav-link" href="#pablo">
                      <span class="no-icon">Log out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <h4>group profile</h4>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="row">
                          <div class="col-md-5 pr-1">
                            <div class="form-group">
                              <label>group name</label>
                              <input
                                type="text"
                                class="form-control"
                                readonly
                                value="group name"
                              />
                            </div>
                          </div>
                          <div class="col-md-3 px-1">
                            <div class="form-group">
                              <label>Thing speak channel id</label>
                              <input
                                type="text"
                                class="form-control"
                                value="thing speak id"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 pr-1">
                            <div class="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                class="form-control"
                                value="member first name"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="col-md-6 pl-1">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                class="form-control"
                                value="member last name"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 pr-1">
                            <div class="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                class="form-control"
                                value="member first name"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="col-md-6 pl-1">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                class="form-control"
                                value="member last name"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 pr-1">
                            <div class="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                class="form-control"
                                value="member first name"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="col-md-6 pl-1">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                class="form-control"
                                value="member last name"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
