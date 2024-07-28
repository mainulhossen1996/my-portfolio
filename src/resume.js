import React from "react";
import { Link } from "react-router-dom";
import arrow from "../src/assets/arrow-left.svg";
import Mainul from "../src/assets/dp.jpg";
import link from "../src/assets/link.png";
import linkedIn from "../src/assets/linkedin.png";
import dribble from "../src/assets/dribble.png";
import call from "../src/assets/phone-call.png";
import location from "../src/assets/your-location.png";

function Resume() {
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex p-lg-5 p-2 align-items-center">
          <Link to="/" className="back-btn">
            <img src={arrow} className="back-icon" />
          </Link>

          <p className="fs-1 fw-600 m-0 mx-3 text-white">Resume</p>
        </div>

        <div className="p-lg-5 p-0 mx-lg-5 mx-0 mb-5">
          <div className="container web-view">
            <div className="d-flex">
              <img src={Mainul} className="resume-img" />
              <div className="px-4">
                <div>
                <p className="m-0 fs-2 fw-bold mb-0 text-white">
                  Md. Mainul Hossen
                </p>
                <p className="mb-2">
                  <a
                    href="https://mainulhossen.com"
                    className="text-white m-0 text-decoration-none"
                  >
                    <img src={link} className="nav-icon me-2 me-1" />
                    <span style={{ borderBottom: "1px solid #565656" }}>
                      mainulhossen.com
                    </span>
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="https://dribbble.com/mainul_mpair"
                    className="text-white m-0 text-decoration-none"
                  >
                    <img src={dribble} className="nav-icon me-2 me-1" />
                    <span style={{ borderBottom: "1px solid #565656" }}>
                      dribbble.com/mainul_mpair
                    </span>
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="tell:+8801843687598"
                    className="text-white m-0 text-decoration-none"
                  >
                    <img src={call} className="nav-icon me-2 me-1" />
                    <span style={{ borderBottom: "1px solid #565656" }}>
                      +880 1843687598
                    </span>
                  </a>
                </p>
                <p className="text-white m-0 ">
                  <img src={location} className="nav-icon me-2 me-1" />
                  Dampara, Chattogram, Bangladesh
                </p>
              </div>



              <p className="fs-2 fw-bold text-white mt-5 mb-2" >Work</p>
              <p className="work-head mb-1">mPair Technologies</p>
              <p className="fs-14 mb-2"><span className="work-des rounded-2 me-2">Founder</span><span className="work-des rounded-2">Managing Director</span></p>
              <p className="fs-14 text-white w-75">With all my expertise and dedication, our mPair team is committed to elevating your business processes with a revolutionary cloud solution.</p>
              <p className="fs-5 text-light fw-600 mb-1">Highlights</p>
              <ul className="text-white">
                <li className="fs-14">
                    Business process automation.
                </li>
                <li className="fs-14">
                    Big data processing & Ai.
                </li>
                <li className="fs-14">
                    100K+ user reached.
                </li>
              </ul>


              <p className="fs-2 fw-bold text-white mt-5 mb-2" >Live Products</p>
              <div className="d-flex">
                <div className="w-50">
                <span className="product-head mb-1" style={{ borderBottom: "1px solid #565656" }}>Someekoron</span>
                <p className="fs-14 text-white w-75">Effortless project management
with precise accounting solutions based on local requirements for infrustructure design
agency, IT, trading & installation
agency. </p>
                </div>


                <div className="w-50">
                <span className="product-head mb-1" style={{ borderBottom: "1px solid #565656" }}>docAppoint</span>
                <p className="fs-14 text-white w-75">Ai integreted doctor appointment booking platform for patient and hospital.</p>
                </div>

                
              </div>

              <div className="d-flex">
                <div className="w-50">
                <span className="product-head mb-1" style={{ borderBottom: "1px solid #565656" }}>schoolSys</span>
                <p className="fs-14 text-white w-75">A comprehensive paperless solution that integrates various administrative & academic processes within an educational institution.</p>
                </div>


                

                
              </div>


              <p className="fs-2 fw-bold text-white mt-5 mb-2" >Education</p>

              <span className="product-head fs-5 mb-1" style={{ borderBottom: "1px solid #565656" }}>M.Sc. in Data Analytics & Design Thinking for Business</span>
              <p className="fs-14 text-white">East Delta University</p>

              <span className="product-head fs-5 mb-1" style={{ borderBottom: "1px solid #565656" }}>B.Sc. in Electrical Engineering</span>
              <p className="fs-14 text-white">International Islamic University Chittagong</p>
              </div>
            </div>

            
          </div>




          <div className="container mobile-view">
            <div>
              <img src={Mainul} className="resume-img" />
              <div className="px-lg-4 px-0 pt-3">
                <div>
                <p className="m-0 fs-2 fw-bold mb-0 text-white">
                  Md. Mainul Hossen
                </p>
                <p className="mb-2">
                  <a
                    href="https://mainulhossen.com"
                    className="text-white m-0 text-decoration-none"
                  >
                    <img src={link} className="nav-icon me-2 me-1" />
                    <span style={{ borderBottom: "1px solid #565656" }}>
                      mainulhossen.com
                    </span>
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="https://dribbble.com/mainul_mpair"
                    className="text-white m-0 text-decoration-none"
                  >
                    <img src={dribble} className="nav-icon me-2 me-1" />
                    <span style={{ borderBottom: "1px solid #565656" }}>
                      dribbble.com/mainul_mpair
                    </span>
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    href="tell:+8801843687598"
                    className="text-white m-0 text-decoration-none"
                  >
                    <img src={call} className="nav-icon me-2 me-1" />
                    <span style={{ borderBottom: "1px solid #565656" }}>
                      +880 1843687598
                    </span>
                  </a>
                </p>
                <p className="text-white m-0 ">
                  <img src={location} className="nav-icon me-2 me-1" />
                  Dampara, Chattogram, Bangladesh
                </p>
              </div>



              <p className="fs-2 fw-bold text-white mt-5 mb-2" >Work</p>
              <p className="work-head mb-1">mPair Technologies</p>
              <p className="fs-14 mb-2"><span className="work-des rounded-2 me-2">Founder</span><span className="work-des rounded-2">Managing Director</span></p>
              <p className="fs-14 text-white">With all my expertise and dedication, our mPair team is committed to elevating your business processes with a revolutionary cloud solution.</p>
              <p className="fs-5 text-light fw-600 mb-1">Highlights</p>
              <ul className="text-white">
                <li className="fs-14">
                    Business process automation.
                </li>
                <li className="fs-14">
                    Big data processing & Ai.
                </li>
                <li className="fs-14">
                    100K+ user reached.
                </li>
              </ul>


              <p className="fs-2 fw-bold text-white mt-5 mb-2" >Live Products</p>

                <div className="w-75">
                <span className="product-head mb-1" style={{ borderBottom: "1px solid #565656" }}>Someekoron</span>
                <p className="fs-14 text-white">Effortless project management
with precise accounting solutions based on local requirements for infrustructure design
agency, IT, trading & installation
agency. </p>
                </div>


                <div className="w-75">
                <span className="product-head mb-1" style={{ borderBottom: "1px solid #565656" }}>docAppoint</span>
                <p className="fs-14 text-white w-100">Ai integreted doctor appointment booking platform for patient and hospital.</p>
                </div>

                

                <div className="w-75">
                <span className="product-head mb-1" style={{ borderBottom: "1px solid #565656" }}>schoolSys</span>
                <p className="fs-14 text-white w-100">A comprehensive paperless solution that integrates various administrative & academic processes within an educational institution.</p>
                </div>


                

                
              </div>


              <p className="fs-2 fw-bold text-white mt-5 mb-2" >Education</p>

              <span className="product-head fs-5 mb-1" style={{ borderBottom: "1px solid #565656" }}>M.Sc. in Data Analytics & Design Thinking for Business</span>
              <p className="fs-14 text-white">East Delta University</p>

              <span className="product-head fs-5 mb-1" style={{ borderBottom: "1px solid #565656" }}>B.Sc. in Electrical Engineering</span>
              <p className="fs-14 text-white">International Islamic University Chittagong</p>
              </div>
            </div>

            
   
        </div>


      </div>
    </div>
  );
}
export default Resume;
