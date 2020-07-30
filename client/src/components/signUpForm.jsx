import React, { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import { Link } from "@reach/router";
import axios from "axios";

function SignUpForm() {
  const [createUser, setCreateuser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [agree, setAgree] = useState(false);

  const handleChange = (e) =>
    setCreateuser({
      ...createUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createUser);
    axios
      .post("http://localhost:5500/user/add", createUser)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <React.Fragment>
      <div className="logo text-center my-5">
        <h2>[LOGO]</h2>
      </div>
      <form onSubmit={handleSubmit} className="signUpForm pb-2">
        <div className="form-group row">
          <div className="col-md-6 mb-xsm-3">
            <Input
              type={"text"}
              placeholder={"First Name"}
              value={createUser.firstName}
              name={"firstName"}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 margin-top-resp">
            <Input
              type={"text"}
              placeholder={"Last Name"}
              value={createUser.lastName}
              name={"lastName"}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <Input
            type={"text"}
            placeholder={"Username"}
            value={createUser.username}
            name={"username"}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Input
            type={"email"}
            placeholder={"Email"}
            value={createUser.email}
            name={"email"}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Input
            type={"password"}
            placeholder={"Password"}
            value={createUser.password}
            name={"password"}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Input
            type={"password"}
            placeholder={"Confirm Password"}
            value={confirmPassword}
            name={"confirmPassword"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              value={agree}
              checked={agree}
              name="agree"
              required
              onChange={(e) => setAgree(!agree)}
            />
            {""} I agree with terms and conditions
          </label>
        </div>

        <div className="pt-4 mx-auto col-md-5">
          <Button title={"Sign Up"} />
        </div>

        <div className="mt-3 text-center">
          <Link to="./signin">
            <p className="text-underline link-btn">Already have an account ?</p>
          </Link>

          <Link to="./signin">Terms of use. Privacy Policy</Link>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SignUpForm;
