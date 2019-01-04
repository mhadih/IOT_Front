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
      <div className="wrapper">
        <div
          className="sidebar"
          data-color="orange"
          data-image="./assets/img/sidebar-5.jpg"
        >
          <div className="sidebar-wrapper">
            <div className="logo">
              <a href="http://www.creative-tim.com" className="simple-text">
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
              <a className="navbar-brand" href="#pablo">
                {" "}
                Typography{" "}
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
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">IOT</h4>
                    </div>
                    <div className="card-body">
                      <div className="typography-line">
                        <h1 className="farsi-text">اینترنت اشیا</h1>
                      </div>
                      <div className="typography-line">
                        <p className="farsi-text">
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
                      <div className="typography-line" />
                      <div className="typography-line">
                        <p className="farsi-text">
                          ابتدا با نود ام یو سی اشنا شدیم و سپس با با محیط
                          اردواینو ک بتوانیم نود ام یو سی را برنامه ریزی کنیم
                          <br />
                          سپس با فرانت آشنا شدیم تا بتوانیم صفحه وب خود را
                          بسازیم سپس به سراغ بک اند رفتیم تا ب توانیم از هر جایی
                          داده بگیریم و آن ها را پرذازش کنیم
                        </p>
                      </div>
                      <div className="members">
                        <div className="member">
                          <div className="member-img">
                            <img src="./m.jpeg" alt="" width="90%" />
                          </div>
                          <div className="member-info farsi-text">
                            مهدی هادیلو دانشجوی کامپیوتر
                          </div>
                        </div>
                        <div className="member">
                          <div className="member-img">
                            <img src="./z.jpeg" alt="" width="90%" height="90%" />
                          </div>
                          <div className="member-info farsi-text">
                            زیوار حسن زاده صورتی
                            <br />
                            کامپیوتر ۹۶
                            <b>رنک ۲</b>
                          </div>
                        </div>
                        <div className="member">
                          <div className="member-img">
                            <img src="./h.jpeg" alt="" width="60%" />
                          </div>
                          <div className="member-info farsi-text">
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
