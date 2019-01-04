import React from "react";
// import "./style.css";

export class Home extends React.Component {
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
          data-image="./assets/img/sidebar-5.jpg"
        >
          <div class="sidebar-wrapper">
            <div class="logo">
              <a href="http://www.creative-tim.com" class="simple-text">
                IOT
              </a>
            </div>
            <ul class="nav">
              <li>
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
              <li class="nav-item active">
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
                Maps{" "}
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
          <div class="map-container">
            <div id="map" />
          </div>
        </div>
      </div>
    );
  }
}
