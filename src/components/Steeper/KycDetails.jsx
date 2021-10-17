import React, { useState } from 'react'
import Styles from './BasicDetails.module.css'
import { useForm } from "react-hook-form";

const KycDetails = () => {

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


   const [imgPreview, setImgPreview] = useState(null);
 const [error, setError] = useState(false);

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
              <div className="card card0">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        Individual Proof
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
                              Enter PAN{" "}
                            </label>
                            <i
                              className="fas fa-id-card"
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
                              name="pan"
                              placeholder="Enter Your PAN Number"
                              className={`form-control ${errors.pan && "invalid"}`}
                              {...register("pan", {
                                required: "pan is Required",
                                min: {
                                  value: 10,
                                  message: "Minimum Required pan is of 10 digit",
                                },
                               
                                
                              })}
                              onKeyUp={() => {
                                trigger("pan");
                              }}
                            />
                             {errors.pan && (
                <small className="text-danger">{errors.pan.message}</small>
              )}

                            
                          </div>
                          <div class="row">
                            <div class="col-md-6 mb-4">
                             <div className="container" style={{
                                marginTop:"20px"
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
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                             <div className="container" style={{
                                marginTop:"20px"
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
                              </div>
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
                        Address Proof
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
                          <div class="col-md-12 mb-4">
                            <label className="form-control-label text-muted">
                              Select Address Proof
                            </label>
                            <select
                              class="form-select"
                              aria-label="Disabled select example"
                              id="state"
                              name="state"
                              style={{ lineHeight: "42px" }}
                            >
                              <option value="1" selected="selected">
                                Aadhar
                              </option>
                              <option value="2">Driving License</option>
                              <option value="3">Passport</option>
                            </select>
                          </div>
                           <div class="row">
                            <div class="col-md-6 mb-4">
                             <div className="container" style={{
                                marginTop:"20px"
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
                              </div>
                            </div>
                            <div class="col-md-6 mb-4">
                             <div className="container" style={{
                                marginTop:"20px"
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
                              </div>
                            </div>
                            </div>
                            
                     
                          
                          <div className="form-group  input-icons">
                            <label className="form-control-label text-muted">
                              Enter ID Number
                            </label>
                            <i
                              className="fas fa-id-card"
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
                              placeholder="Enter Your ID Number"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
              
            </div>
            </section>
        </div>
    )
}

export default KycDetails
