
import React, { useState } from "react";
import Styles from "./Otp.module.css";
import { useHistory, useLocation } from "react-router-dom";
import Axios from "axios";
const Otp = () => {
    const [verifyotp, setverifyotp] = useState("");
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [isSucessfull, setisSucessfull] = useState(false);
    const [isNotSucessfull, setisNotSucessfull] = useState(false);
    const location = useLocation();
    let responsecode;
    // console.log(location.state.mobile);
    const mobileNumber = location.state?.mobile;
    let validateMobileOtp = otp.join("");
    console.log(otp.join(""));
    const validateOTP = () => {
      Axios.get(
        `/OtpApi/checkotp?username=KuruvilaT&password=Sqxl4Y13&msisdn=${mobileNumber}&otp=${validateMobileOtp}&entityid=1601486162497274041&tempid=1607100000000137652`
      )
        .then((response) => {
          console.log(response.data);
          setverifyotp(response.data);
          responsecode = response.data;
          console.log(responsecode);
          console.log(verifyotp);
        })
        .then(() => {
          if (responsecode === 101) {
            setisSucessfull(true);
          } else {
            setisNotSucessfull(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const history = useHistory();
  
    const OTPRedirect = () => {
      history.push("/login1");
    };
  
    const handleChange = (element, index) => {
      if (isNaN(element.value)) return false;
  
      setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
  
      //Focus next input
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    };
  
    return (
      <>
        <section
          className={Styles.vh100}
          style={{
            backgroundColor: "linear-gradient(-35deg,#f7f8fc,#fdfdff,#f7f8fc",
          }}
        >
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div
                  className="col-12 col-md-9 col-lg-7 col-xl-6"
                  style={{ height: "60%", width: "60%" }}
                >
                  <div
                    className="card"
                    style={{
                      borderRadius: "15px",
                      border: "2px solid rgba(0,0,0,.125)",
                    }}
                  >
                    <div className={Styles.cardbody}>
                      <div className="row">
                        <div className="col text-center">
                          <h2 style={{ fontSize: "38px" }}>Enter OTP</h2>
                          <p>
                            Verification code is sent to your mobile<br></br>
                            number +91{mobileNumber}{" "}
                            <i
                              className={`${Styles.fas} fa-edit icon`}
                              onClick={OTPRedirect}
                              area-hidden="true"
                            ></i>{" "}
                          </p>
  
                          {otp.map((data, index) => {
                            return (
                              <input
                                className={Styles.otpfield}
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                              />
                            );
                          })}
  
                          <p>OTP Entered - {otp.join("")}</p>
                          {isSucessfull && (
                            <span
                              style={{
                                color: "red",
                                fontSize: "20px",
                              }}
                            >
                              Otp Verified Sucessfully.
                            </span>
                          )}
                          {isNotSucessfull && (
                            <span
                              style={{
                                color: "red",
                                fontSize: "20px",
                              }}
                            >
                              Please Check the OTP and try again
                            </span>
                          )}
                          <p>
                            <button
                              style={{
                                backgroundColor: "#696969",
                                lineHeight: "2.5rem",
                                marginRight: "50px",
                                width: "100px",
                              }}
                              className="btn btn-secondary mr-2"
                              onClick={(e) => setOtp([...otp.map((v) => "")])}
                            >
                              Clear
                            </button>
                            <button
                              style={{
                                backgroundColor: "#174ea6",
                                lineHeight: "2.5rem",
                              }}
                              className="btn btn-primary"
                              onClick={validateOTP}
                            >
                              Verify OTP
                            </button>
                          </p>
                          <h5
                            style={{ color: "#000000 !important" }}
                            className={`text-center ${Styles.textmuted} mt-5 mb-0`}
                          >
                            Didn’t get verification code?{" "}
                            <a href="#!" className="fw-bold text-body">
                              <u style={{ color: "#174ea6", fontWeight: "500" }}>
                                Resend Code
                              </u>
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Otp
