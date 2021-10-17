import React from 'react'
import { useForm } from "react-hook-form";

const VerifyAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
    return (
        <div>
            <section className=" ">
           
            
            <div className="container px-4 py-5 mx-auto">
            <div class="paragraph">
               
               <h5 style={{fontSize:"20px",fontWeight:"500",textAlign:"center",marginBottom:"50px"}}>Enter the details of your account where you want to want to receive payments</h5>
                 </div>
              <div className="card card0" style={{ padding: "20px 40px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group  input-icons">
                  <label className="form-control-label text-muted">
                    Account Holder Name
                  </label>
                  <i
                    className="fas fa-user icon"
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
                    name="accountholder"
                    placeholder="Account Holder Name"
                    className={`form-control ${errors.accountholder && "invalid"}`}
                    {...register("accountholder", { required: "Account Holder Name is Required" })}
                    onKeyUp={() => {
                      trigger("accountholder");
                    }}
                  />
                   {errors.accountholder && (
                <small className="text-danger">{errors.accountholder.message}</small>
              )}
                </div>
                <div className="form-group  input-icons">
                  <label
                    style={{ marginTop: "20px" }}
                    className="form-control-label text-muted"
                  >
                    IFSC
                  </label>
                  <i
                    className="fas fa-mobile icon"
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
                    name="ifsc"
                    placeholder="IFSC"
                    className={`form-control ${errors.ifsc && "invalid"}`}
                    {...register("ifsc", { required: "IFSC is Required" })}
                    onKeyUp={() => {
                      trigger("ifsc");
                    }}
                  />
                  {errors.ifsc && (
                <small className="text-danger">{errors.ifsc.message}</small>
              )}
                </div>
                <div className="form-group  input-icons">
                  <label
                    style={{ marginTop: "20px" }}
                    className="form-control-label text-muted"
                  >
                    Account Number
                  </label>
                  <i
                    className="fas fa-landmark"
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
                    name="accountnumber"
                    placeholder="Account Number"
                    className={`form-control ${errors.accountnumber && "invalid"}`}
                {...register("accountnumber", {
                  required: "Account Number is Required",
                  min: {
                    value: 35,
                    message: "Minimum Required account is 35",
                  },
                  
                  pattern: {
                    value: /^[a-zA-Z0-9]*$/,
                    message: "No special character is allowed",
                  },
                  pattern: {
                    value: /^[0-35]*$/,
                    message: "Character is not allowed",
                  }
              
                  
                  
                })}
                onKeyUp={() => {
                  trigger("accountnumber");
                }}
                  />
                   {errors.accountnumber && (
                <small className="text-danger">{errors.accountnumber.message}</small>
              )}
                </div>
                <div className="form-group  input-icons">
                  <label
                    style={{ marginTop: "20px" }}
                    className="form-control-label text-muted"
                  >
                    
                    Confirm Account Number
                  </label>
                  <i
                    className="fas fa-landmark"
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
                    placeholder="Confirm Account Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                <button
                  style={{
                    
                    fontSize: "20px",
                    backgroundColor: "#3f51b5",
                    marginTop:"30px",
                    margin:"10px 44%"

                  }}
                  type="button"
                  class="btn btn-primary"
                >
                  Verify
                </button>
                </div>

                <div class="col-md-12 mb-4"style={{marginTop:"20px"}}>
                  <label className="form-control-label text-muted">
                    Choose Your Commission Type
                  </label>
                  <select
                    class="form-select"
                    aria-label="Disabled select example"
                    id="state"
                    name="state"
                    style={{ lineHeight: "42px" }}
                  >
                    <option value="1" selected="selected">
                      CC Avenue
                    </option>
                    <option value="2">Razor Pay</option>
                  </select>
                </div>
                </form>
              </div>
              
            </div>
          </section>
        </div>
    )
}

export default VerifyAccount
