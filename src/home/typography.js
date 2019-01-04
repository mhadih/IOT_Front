import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

export class Typography extends React.Component {
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
                Typography{" "}
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
                      <h4 class="card-title">IOT</h4>
                    </div>
                    <div class="card-body">
                      <div class="typography-line">
                        <h1 class="farsi-text">اینترنت اشیا</h1>
                      </div>
                      <div class="typography-line">
                        <p class="farsi-text">
                          امروزه که همه چیز به دنیای مجازی پیوند خورده از پرداخت
                          قبض گرفته تا خرید انواع چیزها با اینترنت انجام میشود
                          پس اینترنت اشیا می تواند خیلی مفید باشد
                          <br />
                          در این دوره ما نیز سعی در یادگیری و پیاده سازی برنامه
                          هایی که بتوانند پلی بین سخت افزار و نرم افزار باشد
                          داشتیم تا بتوانیم از هر جایی با وصل شدن ب اینترنت ب ان
                          ها دسترسی داشته باشیم
                        </p>
                      </div>
                      <div class="typography-line" />
                      <div class="typography-line">
                        <p class="farsi-text">
                          ابتدا با نود ام یو سی اشنا شدیم و سپس با با محیط
                          اردواینو ک بتوانیم نود ام یو سی را برنامه ریزی کنیم
                          <br />
                          سپس با فرانت آشنا شدیم تا بتوانیم صفحه وب خود را
                          بسازیم سپس به سراغ بک اند رفتیم تا ب توانیم از هر جایی
                          داده بگیریم و آن ها را پرذازش کنیم
                        </p>
                      </div>
                      <div class="members">
                        <div class="member">
                          <div class="member-img">
                            <img src="m.jpeg" alt="" width="90%" />
                          </div>
                          <div class="member-info farsi-text">
                            مهدی هادیلو دانشجوی کامپیوتر
                          </div>
                        </div>
                        <div class="member">
                          <div class="member-img">
                            <img src="z.jpeg" alt="" width="90%" height="90%" />
                          </div>
                          <div class="member-info farsi-text">
                            زیوار حسن زاده صورتی
                            <br />
                            کامپیوتر ۹۶
                            <b>رنک ۲</b>
                          </div>
                        </div>
                        <div class="member">
                          <div class="member-img">
                            <img src="h.jpeg" alt="" width="60%" />
                          </div>
                          <div class="member-info farsi-text">
                            <b>DJ</b>
                            <br />
                            محمد هادی حجت کامپیوتر ۹۶ علاقه مند به مسایل
                            الگوریتمی
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
      </div>
    );
  }
}
