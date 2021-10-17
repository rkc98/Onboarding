import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Styles from './Login.module.css'
const Login = () => {
    
     const [otp, setotp] = useState("");
    const [mobileNumber, setmobileNumber] = useState("");
    const [error, seterror] = useState(false)



    const getOTP = () => {

        Axios.get(
            `/OtpApi/otpgenerate?username=KuruvilaT&password=Sqxl4Y13&msisdn=${mobileNumber}&msg=Your OTP to access KBPOIL is %25m.It will be valid for 3 minutes.&source=KBPOIL&otplen=4&exptime=600&tagname=test&entityid=1601486162497274041&tempid=1607100000000137652`
        )
            .then((response) => {
                console.log(response);
                setotp(response.data.msisdn);
                console.log(otp);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const history = useHistory();

    const handleRoute = () => {
        if (mobileNumber.length !== 10) {
            return seterror(true)
        }
        getOTP();
        history.push({
            pathname: "/otp",
            state: {
                // location state
                mobile: mobileNumber,
            },
        });
    };
    return (
        <>
  <section className={Styles.vh100}>
        <div className={`container px-4 ${Styles.py5} mx-auto`}>
          <div className={Styles.card}>
            <div className="d-flex flex-lg-row flex-column-reverse">
              <div className={`${Styles.card} ${Styles.card1} card`}>
                <div className="row justify-content-center my-auto">
                  <div className="col-md-10 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3">
                      {/* <img id="logo" src="https://i.imgur.com/PSXxjNY.png"> */}
                    </div>
                    <h3 className={`mb-5 text-center ${Styles.heading}`}>
                      Welcome to Shopnpay
                    </h3>
                    <h6 className={Styles.msginfo}>Login to shopnpay</h6>
                    <div className="form-group  input-icons">
                      <label
                        className={`${Styles.formcontrollabel} text-muted`}
                      >
                        Mobile Number
                      </label>
                      <i
                        className={`${Styles.fas} fa-mobile icon`}
                        area-hidden="true"
                        style={{
                          color: "#174ea6",
                          display: "flex",
                          position: "absolute",
                          margin: "20px",
                          fontWeight: "500",
                          fontSize: "18px",
                        }}
                      ></i>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Please Enter Mobile Number"
                        className={Styles.formcontrol}
                        value={mobileNumber}
                        onChange={(e) => {
                          setmobileNumber(e.target.value);
                          seterror(false);
                        }}
                      />
                    </div>
                    {error && (
                      <p style={{ color: "red" }}>
                        please enter 10 digits only
                      </p>
                    )}
                    {/* <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" className="form-control" /> </div> */}
                    <div className="row justify-content-center my-3 px-3">
                      {" "}
                      <button
                        onClick={handleRoute}
                        className={`btn-block ${Styles.btncolor}`}
                      >
                        Verify Mobile
                      </button>{" "}
                    </div>
                    {/* <div className="row justify-content-center my-2"> <a href="#"><small className="text-muted">Forgot Password?</small></a> </div> */}
                  </div>
                </div>
                {/* <div className="bottom text-center mb-5">
                                <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button className="btn btn-white ml-2">Create new</button></p>
                            </div> */}
              </div>
              <div className={`${Styles.card} ${Styles.card2} card`}>
                <div className={`my-auto mx-md-5 px-md-5 ${Styles.right}`}>
                  <h3 className="text-white">
                    We are more than just a company
                  </h3>{" "}
                  <i
                    style={{ color: "white" }}
                    className={`${Styles.fas} fa-info-circle icon`}
                    area-hidden="true"
                  />{" "}
                  <small className="text-white">
                    We will send a 4 digit OTP to the above number, To log in to
                    Shopnpay.To log in to existing account, use the number with
                    which you had already registered on Shopnpay mobile App.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
        
    )
}

export default Login
