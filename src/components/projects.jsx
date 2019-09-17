import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/snapp.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Snapp</a>
                      </h3>
                      <span>React Native Mobile App</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/michaelmeng998/Snapp">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="https://devpost.com/software/snapp-vctpoz">
                            <i className="icon-eye" /> devpost
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-2.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Work 02</a>
                      </h3>
                      <span>Animation</span>
                      <p className="icon">
                        <span>
                          <a href="#">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-eye" /> 100
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i className="icon-heart" /> 49
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/form.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Form</a>
                      </h3>
                      <span>Basketball Form Detection Mobile App</span>
                      <p className="icon">
                        <span>
                          <a href="https://www.dropbox.com/s/wh9s3i93yuu0n1u/Baller.zip?dl=0">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="https://devpost.com/software/form">
                            <i className="icon-eye" /> devpost
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/boba.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Boba.io</a>
                      </h3>
                      <span>Bubble Tea Search Web Application</span>
                      <p className="icon">
                        <span>
                          <a href="https://github.com/michaelmeng998/boba-tea">
                            <i className="icon-share3" />
                          </a>
                        </span>
                        <span>
                          <a href="https://devpost.com/software/boba-tea">
                            <i className="icon-eye" /> 100
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              ></div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              ></div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
