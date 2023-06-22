import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Create_Users() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      state: "",
      country: "",
      gender: "",
      dob: "",
      phone: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "please enter your name";
      }
      if (values.name.length <= 2 || values.name.length >= 15) {
        error.name = "charecters must be between 3-15";
      }
      if (!values.email) {
        error.email = "please enter email address";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "please enter a valid email address";
      }
      if (values.phone.toString().length !== 10) {
        error.phone = "please enter a valid number";
      }

      let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0]);

      if (age < 18) {
        error.dob = "you must be above 18";
      }

      return error;
    },

    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://635914fdc27556d2894b2f63.mockapi.io/api/user",
          values
        );
        alert("success");
      } catch (error) {
        alert("error");
      }
    },
  });

  return (
    <>
      <h2>Create User Account</h2>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="user-card">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="card-logo"
                  src="https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png"
                />
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <label> User Name *</label>
                    <input
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      type={"text"}
                      className={`form-control ${
                        formik.touched.name && formik.errors.name
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.name && !formik.errors.name
                          ? "success-box"
                          : ""
                      }`}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <span style={{ color: "red" }}>{formik.errors.name}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label>Email *</label>
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      type={"text"}
                      className={`form-control ${
                        formik.touched.email && formik.errors.email
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.email && !formik.errors.email
                          ? "success-box"
                          : ""
                      }`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> City</label>
                      <select
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        className="form-control"
                      >
                        <option>----select-----</option>
                        <option> Covai </option>
                        <option> Chennai</option>

                        <option> Salem</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> State</label>
                      <select
                        name="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        className="form-control"
                      >
                        <option>----select-----</option>
                        <option> Tamil Nadu</option>
                        <option> Karnataka</option>
                        <option> Kerala</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> Country</label>
                      <select
                        name="country"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        className="form-control"
                      >
                        <option>----select-----</option>
                        <option> India</option>
                        <option> Bhutan</option>
                        <option> China</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> Gender</label>
                      <select
                        name="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        className="form-control"
                      >
                        <option>----select-----</option>
                        <option> Male</option>
                        <option> Female</option>
                        <option> Transgender</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> Date of Birth</label>
                      <input
                        name="dob"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dob}
                        type={"date"}
                        max={"2010-10-30"}
                        className={`form-control ${
                          formik.touched.dob && formik.errors.dob
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.dob && !formik.errors.dob
                            ? "success-box"
                            : ""
                        }`}
                      />
                      {formik.touched.dob && formik.errors.dob ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.dob}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> Phone Number</label>
                      <input
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        type={"number"}
                        className={`form-control ${
                          formik.touched.phone && formik.errors.phone
                            ? "error-box"
                            : ""
                        } ${
                          formik.touched.phone && !formik.errors.phone
                            ? "success-box"
                            : ""
                        }`}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.phone}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm btn-block">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create_Users;
