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
              <ul class="nav">
                <li class="nav-item active">
                  <a class="nav-link" href="dashboard.html">
                    <i class="nc-icon nc-chart-pie-35" />
                    <p>Dashboard</p>
                  </a>
                </li>
                <li>
                  <a class="nav-link" href="./user.html">
                    <i class="nc-icon nc-circle-09" />
                    <p>User Profile</p>
                  </a>
                </li>

                <li>
                  <a class="nav-link" href="./typography.html">
                    <i class="nc-icon nc-paper-2" />
                    <p>Typography</p>
                  </a>
                </li>

                <li>
                  <a class="nav-link" href="./maps.html">
                    <i class="nc-icon nc-pin-3" />
                    <p>Maps</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-panel">
            <nav class="navbar navbar-expand-lg " color-on-scroll="500">
              <div class=" container-fluid  ">
                <a class="navbar-brand" href="#pablo">
                  {" "}
                  Dashboard{" "}
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
                  <div class="col-md-6">
                    <div class="card ">
                      <div class="card-header ">
                        <h4 class="card-title">Temperature</h4>
                        <p class="card-category">...</p>
                      </div>
                      <div class="card-body ">
                        <div class="ct-chart">
                          <iframe
                            height="260"
                            style="border: 1px solid #cccccc;"
                            src="https://thingspeak.com/channels/659128/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card ">
                      <div class="card-header ">
                        <h4 class="card-title">Visits</h4>
                        <p class="card-category">...</p>
                      </div>
                      <div class="card-body ">
                        <div class="ct-chart">
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
