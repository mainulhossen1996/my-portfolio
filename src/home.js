import React from "react";
import { Link } from "react-router-dom";
import facebookImg from "../src/assets/facebook-dp.jpg";
import linkedImg from "../src/assets/linkedin-dp.jpg";
import LinkArrow from "../src/assets/arrow-up-right-g.png";
import facebook from "../src/assets/facebook.png";
import linkdin from "../src/assets/linkedin.png";
import consult from "../src/assets/suitcase.png";
import job from "../src/assets/rocket.png";
import book from "../src/assets/book.png";
import emp from "../src/assets/bipolar.png";
import define from "../src/assets/aim.png";
import ideate from "../src/assets/idea.png";
import prototype from "../src/assets/3d.png";
import launch from "../src/assets/launch.png";
import project from "../src/assets/project-m.png";
import analysis from "../src/assets/analysis.png";
import uiux from "../src/assets/pen-tool.png";
import coding from "../src/assets/coding.png";
import location from "../src/assets/placeholder.png";
import mail from "../src/assets/mail.svg";


function Home() {
  return (
    <div className="App">
      <div className="bg-dark sticky-top">
        <div className="d-flex justify-content-end align-items-center py-1 container px-lg-5 px-2">
          <Link to="/resume" className="text-decoration-none">
            <p className="fs-14 text-white fw-600 m-0 p-0">Resume</p>
          </Link>
          <img src={mail} className="nav-icon ms-3 me-1" />
          <a
            className="text-decoration-none text-white fs-14 p-0 m-0"
            href="mailto:mainulhossen@mpairtech.com"
          >
            {" "}
            mainulhossen@mpairtech.com
          </a>
        </div>
      </div>

      <div className="container px-lg-5 py-5">
        <div className="header-item web-view">
          <div className="d-flex align-items-end">
            <div className="p-lg-5 p-3 w-70">
              <p className="fs-2 mb-1 text-white">Hey, I'm </p>
              <p className="fs-1 fw-bold mb-2">
                <span className="header-font1">Mainul Hossen</span> 👋
              </p>
              <div className="d-flex flex-wrap">
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  Entrepreneur
                </span>
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  Systems Analyst
                </span>
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  Product Architect
                </span>
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  UI/UX Designer
                </span>
              </div>

              <p className="fs-14 m-0 text-white mt-2">
                As an entrepreneur and seasoned system analyst with a proven
                track record, I excel in crafting cutting-edge software
                solutions and designing intuitive user interfaces. With a
                passion for technology and a keen eye for detail, I bring a
                unique blend of technical expertise and creative flair to my
                products.
              </p>

              <div className="d-flex">
                <div className="social-box p-2 d-flex rounded-2 mt-3 bg-dark justify-content-between me-3">
                  <div className="d-flex align-items-center position-relative">
                    <img src={linkedImg} className="social-dp me-3" />
                    <p className="m-0 text-white">LinkedIn</p>

                    <div className="social-icon">
                      <img src={linkdin} className="social-icon-img me-2" />
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/mainul-1996/"
                    target="blank"
                  >
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                </div>
                <div className="social-box p-2 d-flex rounded-2 mt-3 bg-dark justify-content-between">
                  <div className="d-flex align-items-center position-relative">
                    <img src={facebookImg} className="social-dp me-3" />
                    <p className="m-0 text-white">Facebook</p>

                    <div className="social-icon">
                      <img src={facebook} className="social-icon-img me-2" />
                    </div>
                  </div>

                  <a href="https://facebook.com/mainul.1996" target="blank">
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-30 py-5">
              <div className="d-flex align-items-center">
                <img src={location} className="feature-icon-xl" />
                <div>
                  <p className="fs-14 text-white m-0">Working From</p>
                  <p className="fs-5 text-white fw-bold m-0">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-view">
          <div className="d-flex align-items-end">
            <div className="px-2 w-100">
              <p className="fs-3 mb-1 text-white">Hey, I'm </p>
              <p className="fs-1 fw-bold mb-2">
                <span className="header-font1">Mainul Hossen</span> 👋
              </p>
              <div className="d-flex flex-wrap">
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  Entrepreneur
                </span>
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  Systems Analyst
                </span>
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  Product Architect
                </span>
                <span className="rounded-pill feature-pill px-3 py-1 me-2 mb-2">
                  UI/UX Designer
                </span>
              </div>

              <p className="fs-14 m-0 text-white mt-2">
                As an entrepreneur and seasoned system analyst with a proven
                track record, I excel in crafting cutting-edge software
                solutions and designing intuitive user interfaces. With a
                passion for technology and a keen eye for detail, I bring a
                unique blend of technical expertise and creative flair to my
                products.
              </p>

              <div className="d-flex">
                <div className="social-box p-2 d-flex rounded-2 mt-3 bg-dark justify-content-between me-3">
                  <div className="d-flex align-items-center position-relative">
                    <img src={linkedImg} className="social-dp me-3" />
                    <p className="m-0 fs-14 text-white">LinkedIn</p>

                    <div className="social-icon">
                      <img src={linkdin} className="social-icon-img me-2" />
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/mainul-1996/"
                    target="blank"
                  >
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                </div>
                <div className="social-box p-2 d-flex rounded-2 mt-3 bg-dark justify-content-between">
                  <div className="d-flex align-items-center position-relative">
                    <img src={facebookImg} className="social-dp me-3" />
                    <p className="m-0 fs-14 text-white">Facebook</p>

                    <div className="social-icon">
                      <img src={facebook} className="social-icon-img me-2" />
                    </div>
                  </div>

                  <a href="https://facebook.com/mainul.1996" target="blank">
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="second-header-item">
        <div className="row my-5 pt-5 px-lg-0 px-2">
          <div className="col-lg-12 col-12 px-2">
            <p className="text-white large-text">
              Since 2021, I am a dedicated{" "}
              <span className="border-text pb-1">product architect</span>{" "}
              committed to crafting experiences that redefine efficiency. Let's
              elevate your <span className="border-text pb-1">business</span>{" "}
              effortlessly through innovative, structured design excellence and
              creativity.
            </p>
          </div>

        </div>

        <div className="row my-5 px-lg-0 px-2">
          <div className="col-lg-12 mb-3">
            <div className="">
              <p className=" m-0 text-xxl">
                <span className="counter-text-xl text-white">20+</span> Project
                Management
              </p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="">
              <p className=" m-0 text-xxl">
                <span className="counter-text-xl text-white">5+</span> Product
                Design
              </p>
            </div>
          </div>
        </div>

        </div>

        <div className="row my-5 py-5 px-lg-0 px-2">
          <p className="text-blue">Latest Works</p>


          <div className="col-lg-4 mb-4">
            <div className="feature-box p-4 rounded-4">
              <div className="d-flex gap-3 align-items-center mb-2"> 
              <p className="text-white fs-3 fw-semibold m-0">
                SchoolSys
              </p>

              <a
                    href="https://www.linkedin.com/in/mainul-1996/"
                    target="blank"
                  >
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                  </div>
              <p className="fs-5 text-feature">
              I possess a multifaceted skill set encompassing project management,
            data analytics, and expertise in UI/UX design.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="feature-box p-4 rounded-4">
            <div className="d-flex gap-3 align-items-center mb-2"> 
              <p className="text-white fs-3 fw-semibold m-0">
                DokaniBhai
              </p>

              <a
                    href="https://www.linkedin.com/in/mainul-1996/"
                    target="blank"
                  >
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                  </div>
              <p className="fs-5 text-feature">
              I possess a multifaceted skill set encompassing project management,
            data analytics, and expertise in UI/UX design.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="feature-box p-4 rounded-4">
            <div className="d-flex gap-3 align-items-center mb-2"> 
              <p className="text-white fs-3 fw-semibold m-0">
                Aromo Health
              </p>

              <a
                    href="https://www.linkedin.com/in/mainul-1996/"
                    target="blank"
                  >
                    <img src={LinkArrow} className="link-arrow me-2" />
                  </a>
                  </div>
              <p className="fs-5 text-feature">
              I possess a multifaceted skill set encompassing project management,
            data analytics, and expertise in UI/UX design.
              </p>
            </div>
          </div>
        </div>

        <div className="my-5 py-lg-5 px-lg-0 px-2">
          <p className="large-text text-slate mb-lg-2 mb-5">
            I possess a multifaceted skill set encompassing project management,
            data analytics, and expertise in UI/UX design. Additionally, my
            proficiency extends to crafting visually engaging front-end web
            interfaces, creating a dynamic blend for innovative and impactful
            digital solutions.
          </p>
          <div className="row align-items-center mt-lg-5 mt-3">
            <div className="col-lg-3 mb-3">
              <div className="feature-box rounded-3 bg-dark p-3">
                <img src={project} className="feature-icon mb-2" />
                <p className="text-white fs-5 m-0">
                  Project Management tool like{" "}
                  <span className="counter-text">Agile</span>,{" "}
                  <span className="counter-text">Scrum</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="feature-box rounded-3 bg-dark p-3">
                <img src={analysis} className="feature-icon mb-2" />
                <p className="text-white fs-5 m-0">
                  Big data analytics tool like{" "}
                  <span className="counter-text">R Studio</span>,{" "}
                  <span className="counter-text">MatLab</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="feature-box rounded-3 bg-dark p-3">
                <img src={uiux} className="feature-icon mb-2" />
                <p className="text-white fs-5 m-0">
                  UI/UX design tool like{" "}
                  <span className="counter-text">Figma</span>,{" "}
                  <span className="counter-text">Adobe XD</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <div className="feature-box rounded-3 bg-dark p-3">
                <img src={coding} className="feature-icon mb-2" />
                <p className="text-white fs-5 m-0">
                  Front-end web framework like{" "}
                  <span className="counter-text">Next.js</span>,{" "}
                  <span className="counter-text">React.js</span>,{" "}
                  <span className="counter-text">Vue.js</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 text-center">
          <p className="fs-12 text-white">© Mainul Hossen</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
