import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineering Intern (Backend) <br></br>
                          <span>Waterloo, Ontario </span>
                          <br></br>
                          <span>Jan. 2020 - Apr. 2020</span>
                        </h2>
                        <h2>Index Exchange</h2>
                        <p>
                          •Worked in the Deals & Audiences product development
                          team <br></br>
                          •Worked in an agile software development team to build
                          new micro-services for programmatic deals workflows on
                          the ad exchange; services were used to support 15% of
                          IX’s revenue stream <br></br>
                          •Developed new API services for demand side traders to
                          view and create deals; responsible for a new deal
                          discovery feature through creating efficient queries
                          that returned large collections of deals data and
                          building out the API route handlers
                          <br></br>
                          •Improved the test coverage of our data API by 10%
                          through new methods of route level dependency
                          injection used to create granular service tests; wrote
                          database mocks using go-sqlmock and a request
                          multiplexer to handle traffic to a test server
                          <br></br>
                          •Worked on implementing API client code generation for
                          Authorization, Web, and Data API's to improve codebase
                          consistency, readability, and support new CI/CD
                          automation initiatives
                          <br></br>
                          •Worked on a password reset API for a new login
                          workflow to bridge legacy and new account creation
                          <br></br>
                          •Worked on setting up gitlab CI/CD pipelines for our
                          api services; set up kubernetes auto-deployment and
                          autoscaling,prometheus metrics monitoring and
                          alerting, and grafana dashboards <br></br>
                          •Using {""}
                          <strong>
                            Golang, Gin, MySQL, Kubernetes, Docker, Prometheus,
                            Grafana, Git
                          </strong>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer <br></br>
                          <span>Waterloo, Ontario </span>
                          <br></br>
                          <span>Aug. 2019 - Present</span>
                        </h2>
                        <h2>Waterloo Startup</h2>
                        <p>
                          •Working on a mobile food ordering platform in a small
                          agile team targeting ghost kitchens <br></br>
                          •Led the development of menu related features for the
                          merchant and client apps utilizing cloud firestore and
                          firebase storage queries; created services to let
                          merchants upload, edit, and delete photos linked to
                          menu items
                          <br></br> •Implemented a react component that caches
                          images to reduce firebase API calls <br></br>
                          •Worked on merchant menu features; created an
                          inventory management system, user forms, and item
                          customization features <br></br>
                          •Using {""}
                          <strong>
                            Javascript, React Native, Redux, Firebase, Xcode,
                            Android Studio, Git
                          </strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer Intern <br></br>
                          <span>Waterloo, Ontario </span>
                          <br></br>
                          <span>May. 2019 - Aug. 2019</span>
                        </h2>
                        <h2>Opentext Exstream Devops and Framework Team</h2>
                        <p>
                          •Worked in an agile software development team to build
                          devops site features, automation framework features,
                          and CLI tools<br></br>
                          •Developed an ease of use data query tool for the
                          devops website that saved the development team over
                          300 hours/year during automated run analysis on large
                          collections of data
                          <br></br>•Worked on the fullstack development of the
                          feature; wrote optimized SQL queries and string
                          concatenation algorithms
                          <br></br>•Developed the frontend dashboard template
                          and utilized python RegEx filters to clean and
                          summarize failure description data
                          <br></br>•Worked on the development of a new python
                          test automation framework that decreased automated
                          regression run times by 50% to speed up the deployment
                          of the Exstream software suite; Implemented OOP
                          modular design, framework functions to decrease
                          generated file sizes, and decreased VM resource usage
                          <br></br>•Developed, troubleshooted and fixed new and
                          existing framework features to improve VM resource
                          management
                          <br></br>•Wrote 100+ new python test automation
                          scripts for build/database coverage during automated
                          regression testing
                          <br></br>•Used {""}
                          <strong>
                            Python, CherryPy, SQL Alchemy, Mako, SVN{" "}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer - High Level Data Fusion <br></br>
                          <span>Waterloo, Ontario </span>
                          <br></br>
                          <span>Jan. 2018 - May. 2019</span>
                        </h2>
                        <h2>WATonomous</h2>
                        <p>
                          •Worked in an autonomous vehicle data processing team
                          that developed the data fusion pipeline for matching
                          lidar, radar, and camera data; used ROS kinetic
                          (client-server protocol framework), Ubuntu 16.04,
                          vagrant virtual machine, and C++<br></br>
                          •Developed a data publishing microservice to match
                          lidar and camera data; implemented time
                          synchronization between different incoming frequencies
                          of lidar and camera data to reduce fusion error
                          <br></br>•Worked on a depth association algorithm to
                          associate lidar and camera data; developed an object
                          detection matching function based off of the
                          intersection of unions evaluation metric which passed
                          the KITTI dataset unit tests with 99% accuracy
                          <br></br>•Researched & developed lane matching and
                          threshold function algorithms using dynamic time
                          warping optimization method
                          <br></br>•Used {""}
                          <strong>C++, ROS, Python, Ubuntu 16.04, Git</strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Automation Design Engineering Intern <br></br>
                          <span>Guelph, Ontario </span>
                          <br></br>
                          <span>May. 2018 - Aug. 2018</span>
                        </h2>
                        <h2>Linamar Gear</h2>
                        <p>
                          •Worked in the linamar gear engineering team on
                          automation projects to help increase manufacturing
                          throughput by 30%; designed robot end of arm tooling,
                          orientation systems, and conveyor equipment on new
                          production lines for Ford and GM vehicles<br></br>
                          •Led the research & development of 3d printed
                          prototypes for new automated gear orientation systems
                          to reduce fixture costs
                          <br></br>•Used {""}
                          <strong>SolidWorks, AutoCAD, FEA</strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Contract Drone Designer <br></br>
                          <span>Guelph, Ontario </span>
                          <br></br>
                          <span>May. 2018 - Aug. 2018</span>
                        </h2>
                        <h2>Private Drone Contractor in Australia</h2>
                        <p>
                          •Designed Drone parts using Solidworks and Inventor
                          Software<br></br>
                          •Designed Drone shell and Landing Gear Supporters;
                          utilized advanced surface modelling for optimized
                          Carbon Fibre Reinforced Polymer Strengthening process
                          <br></br>
                          •Conducted FEA and CFD simulations on drone shell to
                          ensure aerodynamic design as well as lightweight but
                          supported frame structure
                          <br></br>•Used {""}
                          <strong>SolidWorks, AutoCAD, FEA, CFD</strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Process Engineering Intern <br></br>
                          <span>London, Ontario </span>
                          <br></br>
                          <span>Sept. 2017 - Dec. 2017 </span>
                        </h2>
                        <h2>TSC Stores, Corporate Office</h2>
                        <p>
                          •In this role as a process engineering intern, I
                          spearheaded multiple lean continous improvement
                          projects throughout their development cycle for the
                          distribution center. For instance, I worked on
                          developing new lean product picking, recieving, and
                          storage processes with focuses on decreasing cycle
                          time and decreasing process costs<br></br>
                          •Managed lean process improvement projects using A3,
                          Process Maps, VSM, RCA, time studies and DOE to
                          measure, record, analyze and validate project
                          initiatives; commended by corporate president for
                          excellence in A3 project development
                          <br></br>•Managed the development of a $2 million
                          automated sortation system to increase product sorting
                          efficiency / used AutoCAD to produce conceptual
                          drawings and integration schematics
                          <br></br>•Led product flow optimization project
                          through planning and implementation phases to increase
                          process efficiency by 30% and save $200K in labor
                          spending’s annually
                          <br></br>•Used {""}
                          <strong>AutoCAD, Excel</strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Wireless Systems Software Research Engineering Intern{" "}
                          <br></br>
                          <span>Waterloo, Ontario </span>
                          <br></br>
                          <span>Jan. 2017 - Apr. 2017</span>
                        </h2>
                        <h2>University of Waterloo</h2>
                        <p>
                          •Worked in a wireless systems research lab developing
                          novel IOT projects to detect motion and material
                          composition<br></br>
                          •Worked on using bluetooth low energy for automatic
                          device pairing; modified motion interrupts and package
                          advertising functions to add motion data to bluetooth
                          packets
                          <br></br>•Developed a novel occupancy detection system
                          using bluetooth low energy transmitters and receivers;
                          co-authored an extensive research paper based on the
                          new detection system to be published in the IEEE
                          journal
                          <br></br>•Developed, tested and optimized the room
                          occupancy detection system; worked on a MATLAB script
                          using fourier transforms and other signal processing
                          methods to provide real-time detection feedback during
                          development
                          <br></br>•Used {""}
                          <strong>C, Python, MATLAB, Git</strong>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
