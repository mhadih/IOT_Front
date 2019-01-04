import React from "react";
import { Link } from 'react-router-dom';
// import "./style.css";

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
    user: state.user,
  };
}

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
		let members = this.props.user.map( (value, index) => {
			return (
				<div className="row">
					<div className="col-md-6 pr-1">
						<div className="form-group">
							<label>First Name</label>
							<input
								type="text"
								className="form-control"
								value={value}
								readOnly
							/>
						</div>
					</div>
				</div>
			);
		});
    return (
      <div className="wrapper">
        <div
          className="sidebar"
          data-color="orange"
          data-image="./assets/img/sidebar-5.jpg"
        >
          <div className="sidebar-wrapper">
            <div className="logo">
              <a href="#" className="simple-text">
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
            </ul>
          </div>
        </div>
        <div className="main-panel">
          <nav className="navbar navbar-expand-lg " color-on-scroll="500">
            <div className=" container-fluid  ">
              <a className="navbar-brand" href="#">
                {" "}
                User{" "}
              </a>
              <button
                href=""
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar burger-lines" />
                <span className="navbar-toggler-bar burger-lines" />
                <span className="navbar-toggler-bar burger-lines" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item" />
                  <li className="dropdown nav-item" />
                  <li className="nav-item" />
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item" />
                  <li className="nav-item dropdown" />
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="no-icon">Log out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>group profile</h4>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-5 pr-1">
                            <div className="form-group">
                              <label>group name</label>
                              <input
                                type="text"
                                className="form-control"
                                readOnly
                                value="group name"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 px-1">
                            <div className="form-group">
                              <label>Thing speak channel id</label>
                              <input
                                type="text"
                                className="form-control"
                                value="thing speak id"
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 pr-1">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value={this.props.user.}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="col-md-6 pl-1">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value="member last name"
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 pr-1">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value="member first name"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="col-md-6 pl-1">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value="member last name"
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 pr-1">
                            <div className="form-group">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value="member first name"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="col-md-6 pl-1">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value="member last name"
                                readOnly
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

export default connect(mapStateToProps)(User);
