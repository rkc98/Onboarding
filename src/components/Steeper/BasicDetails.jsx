import React, { useState } from 'react'
import Styles from './BasicDetails.module.css'
import { Controller, useForm, useFormContext } from "react-hook-form";



const BasicDetails = () => {
 



  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);


  const {
    register,
    handleSubmit,

    reset,
    trigger,
  } = useForm();

  const {control,formState:{errors}} =useFormContext();




  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "images/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      }
      reader.readAsDataURL(selected);
    } else {
      setError(true);

    }
  };
  console.log(imgPreview);








  return (
    <div>
      <section className=" ">
        <div className="container px-4 py-5 mx-auto">
          {/* <div class="paragraph">
               
               <h5 style={{fontSize:"20px",color:"red",fontWeight:"bolder",textAlign:"center",marginBottom:"50px"}}>Please complete the below steps to register your business and verify yourself immediately to transact! </h5>
                 </div> */}
          <div className="card card0">

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Basic Details
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">

                    <div className="col-md-12 col-10 my-5">

                      <div className="form-group  input-icons">
                        <label className="form-control-label text-muted">
                          Name of business
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
                        <Controller
                        control={control}
                        name="nameOfBussiness"
                        rules={{required:true}}
                        render={({ field }) => (
                        <input
                          type="text"
                          id="nameOfBussiness"
                          name="nameOfBussiness"
                          placeholder="Name of business"
                          className={`form-control`}
                          
                          onKeyUp={() => {
                            trigger("name");
                          }}
                          {...field}
                            style={errors.nameOfBussiness?{border:'1px solid red'}:{}}

                        />)}
                        />
                        {errors.nameOfBussiness && (
                <small className="text-danger">Name of the business required </small>
              )}
                      </div>
                      <div class="paragraph" style={{ marginTop: "20px" }}>

                        {/* <h7 style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}>Address of Bussiness</h7> */}
                      </div>
                      <div className="form-group  input-icons">
                        <label
                          style={{ marginTop: "20px" }}
                          className="form-control-label text-muted"
                        >
                          Address
                        </label>
                        <i
                          className="fas fa-address-card"
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
                          name="address"
                          placeholder="Address(building,street,area)"
                          className={`form-control ${errors.name && "invalid"}`}
                          {...register("address", { required: "Address is Required" })}
                          onKeyUp={() => {
                            trigger("address");
                          }}


                        />
                        {errors.address && (
                <small className="text-danger">{errors.address.message}</small>
              )}
                      </div>
                      <div className="form-group  input-icons">
                        <label
                          style={{ marginTop: "20px" }}
                          className="form-control-label text-muted"
                        >
                          Pin
                        </label>
                        <i
                          className="fas fa-map-pin"
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
                          name="pin"
                          placeholder="Pin"
                          className={`form-control ${errors.pin && "invalid"}`}
                          {...register("pin", {
                            required: "pin is Required",
                            min: {
                              value: 6,
                              message: "Minimum Required pin is 6",
                            },
                            max: {
                              value: 6,
                              message: "Pincode must not be greater than 6",
                            },
                            pattern: {
                              value: /^[0-6]*$/,
                              message: "Only numbers are allowed",
                            }
                          })}
                          onKeyUp={() => {
                            trigger("pin");
                          }}

                        />
                        {errors.pin && (
                <small className="text-danger">{errors.pin.message}</small>
              )}
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div className="form-group  input-icons">
                            <label
                              style={{ marginTop: "20px" }}
                              className="form-control-label text-muted"
                            >
                              City
                            </label>
                            <i
                              className="fas fa-city icon"
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
                              placeholder="City"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div className="form-group  input-icons">
                            <label
                              style={{ marginTop: "20px" }}
                              className="form-control-label text-muted"
                            >
                              State
                            </label>
                            <i
                              className="fas fa-city icon"
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
                              placeholder="State"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group  input-icons">
                          <label className="form-control-label text-muted">
                            GST
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
                            name="email"
                            placeholder="Enter Your GST Number"
                            className="form-control"
                          />
                        </div>
                        <div className="container" style={{
                          marginTop: "20px"
                        }}>
                          {error && <p className={Styles.errorMsg}>file not supported</p>}
                          <div className={Styles.imgPreview}
                            style={{ background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "" }}>
                            {!imgPreview && (
                              <>
                                <p>Add an image</p>
                                <label htmlFor="fileUpload" className={Styles.customFileUpload}>Choose File</label>
                                <input type="file" id="fileUpload" onChange={handleImageChange} />
                                <span>(jpg,jpeg or png)</span>
                              </>
                            )}
                          </div>
                          {/* {!imgPreview && (
                                <button onClick={() => setImgPreview(null)}>Remove Images</button>)} */}


                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Basic Owner Details
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="col-md-12 col-10 my-5">
                      <div className="form-group  input-icons">
                        <label className="form-control-label text-muted">
                          Your Name
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
                          name="yourname"
                          placeholder="Your name(Owner/Proprietor)"
                          className={`form-control ${errors.yourname && "invalid"}`}
                          {...register("yourname", { required: "Name is Required" })}
                          onKeyUp={() => {
                            trigger("yourname");
                          }}
                        />
                        {errors.yourname && (
                <small className="text-danger">{errors.yourname.message}</small>
              )}
                      </div>
                      <div className="form-group  input-icons">
                        <label
                          style={{ marginTop: "20px" }}
                          className="form-control-label text-muted"
                        >
                          date of Birth
                        </label>
                        <i
                          className="fas fa-birthday-cake"
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
                          placeholder="Your Date of Birth"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group  input-icons">
                        <label
                          style={{ marginTop: "20px" }}
                          className="form-control-label text-muted"
                        >
                          Email ID
                        </label>
                        <i
                          className="fas fa-envelope icon"
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
                          placeholder="Your Email ID"
                          className={`form-control ${errors.email && "invalid"}`}
                          {...register("email", { required: "Email is Required" ,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          }})}
                          onKeyUp={() => {
                            trigger("email");
                          }}
                        />
                        {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
                      </div>
                      <div className="container" style={{
                        marginTop: "20px"
                      }}>
                        {error && <p className={Styles.errorMsg}>file not supported</p>}
                        <div className={Styles.imgPreview}
                          style={{ background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "" }}>
                          {!imgPreview && (
                            <>
                              <p>Add an image</p>
                              <label htmlFor="fileUpload" className={Styles.customFileUpload}>Choose File</label>
                              <input type="file" id="fileUpload" onChange={handleImageChange} />
                              <span>(jpg,jpeg or png)</span>
                            </>
                          )}
                        </div>
                        {/* {!imgPreview && (
                                <button onClick={() => setImgPreview(null)}>Remove Images</button>)} */}


                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>
    </div>
  )
}

export default BasicDetails
