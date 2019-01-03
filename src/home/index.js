import React from "react";
// import "./style.css";
import './assets/img/apple-icon.png';
import './assets/img/favicon.ico';
import './assets/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css?v=2.0.1';
import './assets/css/demo.css';
// import './assets/js/core/jquery.3.2.1.min.js';
// import './assets/js/core/popper.min.js';
// import './assets/js/core/bootstrap.min.js';
// import './assets/js/plugins/bootstrap-switch.js';
// import 'https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE';
// import './assets/js/plugins/chartist.min.js';
// import './assets/js/plugins/bootstrap-notify.js';
// import './assets/js/light-bootstrap-dashboard.js?v=2.0.1';
// import './assets/js/demo.js';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div
            className="sidebar"
            data-color="orange"
            data-image="../assets/img/sidebar-5.jpg"
          >
            <div className="sidebar-wrapper">
              <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text">
                  IOT
                </a>
              </div>
              <ul className="nav">
                <li className="nav-item active">
                  <a className="nav-link" href="dashboard.html">
                    <i className="nc-icon nc-chart-pie-35" />
                    <p>Dashboard</p>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="./user.html">
                    <i className="nc-icon nc-circle-09" />
                    <p>User Profile</p>
                  </a>
                </li>

                <li>
                  <a className="nav-link" href="./typography.html">
                    <i className="nc-icon nc-paper-2" />
                    <p>Typography</p>
                  </a>
                </li>

                <li>
                  <a className="nav-link" href="./maps.html">
                    <i className="nc-icon nc-pin-3" />
                    <p>Maps</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel">
            <nav className="navbar navbar-expand-lg " color-on-scroll="500">
              <div className=" container-fluid  ">
                <a className="navbar-brand" href="#pablo">
                  {" "}
                  Dashboard{" "}
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
                      <a className="nav-link" href="#pablo">
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
                  <div className="col-md-6">
                    <div className="card ">
                      <div className="card-header ">
                        <h4 className="card-title">Temperature</h4>
                        <p className="card-category">...</p>
                      </div>
                      <div className="card-body ">
                        <div className="ct-chart">
                          <iframe
                            height="260"
                            style="border: 1px solid #cccccc;"
                            src="https://thingspeak.com/channels/659128/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card ">
                      <div className="card-header ">
                        <h4 className="card-title">Visits</h4>
                        <p className="card-category">...</p>
                      </div>
                      <div className="card-body ">
                        <div className="ct-chart">
                          <iframe
                            height="260"
                            style="border: 1px solid #cccccc;"
                            src="https://thingspeak.com/channels/659128/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
                          />
                        </div>
                      </div>
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
