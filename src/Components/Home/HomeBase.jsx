import React from "react";
import {
  BOOT,
  COMPANY1,
  CSS_5,
  DEVELOPER,
  HTML_5,
  JS,
  MOTION,
  PERFORM,
  PORTFOLIO,
  REACT,
  REDUXX,
  SAAS,
  USER,
} from "../../Helper/Images";

export default function HomeBase() {
  return (
    <>
      <h1 className="mainHeader">
        Welcome to My Portfolio - Code, Reuse, Scale - React.js at the core
      </h1>

      <div class="card-container">
        <div class="card">
          <div className="card-header">Introduction</div>
          <div className="d-flex justify-content-center">
            <img
              src={DEVELOPER}
              style={{ height: "6rem", width: "6rem", padding: "1rem" }}
            />
          </div>
          <div class="card-body" style={{ paddingTop: 0 }}>
            <h5 class="card-title text-center">Navneet Kaur</h5>
            <h6>Committed to Growth, Driven by Curiosity</h6>
            <p class="card-text">
              Hi, I’m a Software developer with 4+ years of experience
              specializing in frontend development. I’m actively focused on
              improving and expanding my current skill set and diving into
              backend development to complement my current skill set.
            </p>
            <p class="card-text">
              Browse my portfolio to learn more about my journey, achievements,
              and ongoing learnings.
            </p>
          </div>
          <div className="card-footer">
            <button type="button">View My Work</button>
          </div>
        </div>

        <div class="card">
          <div className="card-header">Why Me?</div>
          <div className="d-flex justify-content-center">
            <img
              src={USER}
              style={{ height: "6rem", width: "6rem", padding: "1rem" }}
            />
          </div>
          <div class="card-body" style={{ paddingTop: 0 }}>
            <ul style={{ textAlign: "left", width: "100%" }}>
              <li>Critical Thinking</li>
              <li>Problem Presistence</li>
              <li>Clean and Reusable Code</li>
              <li>Adaptability</li>
              <li>Always Ready to learn </li>
              <li>Collaboration</li>
              <li>Tech Skills</li>
            </ul>
            <div
              className="d-flex g-3"
              style={{
                flexWrap: "wrap",
                justifyItems: "center",
                flexDirection: "row-reverse",
                gap: "0.5rem",
              }}
            >
              <img src={REACT} style={{ height: "2rem", width: "2rem" }} />
              <img src={HTML_5} style={{ height: "2rem", width: "2rem" }} />
              <img src={CSS_5} style={{ height: "2rem", width: "2rem" }} />
              <img src={JS} style={{ height: "2rem", width: "2rem" }} />
              <img src={SAAS} style={{ height: "2rem", width: "2rem" }} />
              <img src={BOOT} style={{ height: "2rem", width: "2rem" }} />
              <img src={REDUXX} style={{ height: "2rem", width: "2rem" }} />
              <img src={MOTION} style={{ height: "2rem", width: "2rem" }} />
            </div>
          </div>
          <div className="card-footer">
            <button type="button">Browse Details</button>
          </div>
        </div>

        <div class="card">
          <div className="card-header">Work Experience</div>
          <div className="d-flex justify-content-center">
            {" "}
            <img
              src={PORTFOLIO}
              style={{
                height: "6rem",
                width: "6rem",
                padding: "1rem",
                filter: "brightness(0)",
              }}
            />
          </div>
          <div class="card-body" style={{ paddingTop: 0 }}>
            <div
              className="d-flex  justify-content-left"
              style={{ width: "100%" }}
            >
              <img src={COMPANY1} style={{ height: "2rem", width: "2rem" }} />
              <div
                className="justify-content-left ml-1 "
                style={{ textAlign: "left", marginLeft: ".4rem" }}
              >
                <h6 style={{ marginBottom: "0px" }}>
                  Senior Software Developer
                </h6>
                <label>Wollemi Solutions Private Limited</label>
                <label>November, 2021 - Present</label>
              </div>
            </div>
            <hr />
            <div
              className="d-flex  justify-content-left"
              style={{ width: "100%" }}
            >
              <img src={COMPANY1} style={{ height: "2rem", width: "2rem" }} />
              <div
                className="justify-content-left ml-1 "
                style={{ textAlign: "left", marginLeft: ".4rem" }}
              >
                <h6 style={{ marginBottom: "0px" }}>
                  Frontend Developer (React.js)
                </h6>
                <label>Wollemi Solutions Private Limited</label>
                <label>November, 2020 - August, 2021</label>
              </div>
            </div>
            <hr />
            <div
              className="d-flex  justify-content-left"
              style={{ width: "100%" }}
            >
              <img src={COMPANY1} style={{ height: "2rem", width: "2rem" }} />
              <div
                className="justify-content-left ml-1 "
                style={{ textAlign: "left", marginLeft: ".4rem" }}
              >
                <h6 style={{ marginBottom: "0px" }}>Software Intern</h6>
                <label>Wollemi Solutions Private Limited</label>
                <label>March, 2020 - August, 2021</label>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="button">View Detail</button>
          </div>
        </div>

        {/* <div class="card">
          <div className="card-header">Performance Certificate</div>
          
          <div class="card-body" style={{ paddingTop: 0 }}>
            <img
              src={PERFORM}
             
            />
          </div>
          <div className="card-footer">
            <button type="button">View My Work</button>
          </div>
        </div> */}
      </div>
    </>
  );
}
