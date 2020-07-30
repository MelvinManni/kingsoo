import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import { Link } from "@reach/router";
import ButtonOutline from "./buttonOutLine";
import axios from "axios";

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const handleChange = (e) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5500/user/", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.msg);
      });
  };

  return (
    <React.Fragment>
      <div className="logo text-center my-5">
        <h2>[LOGO]</h2>
      </div>
      <form onSubmit={handleSubmit} id="logInForm" className="signUpForm">
        <div className="form-group">
          <Input
            type={"text"}
            placeholder={"Username"}
            value={user.username}
            name={"username"}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Input
            type={"password"}
            placeholder={"Password"}
            value={user.password}
            name={"password"}
            onChange={handleChange}
          />
        </div>

        <div className="form-group space-evenly">
          <label>
            <input
              type="checkbox"
              value={remember}
              checked={remember}
              name="agree"
              onChange={(e) => setRemember(!remember)}
            />
            {""} Remember Me
          </label>

          <Link to="./signin">Forgot Password</Link>
        </div>
      </form>

      <div className="pt-4 mx-auto space-evenly">
        <div className="col-md-5">
          <Button form={"logInForm"} title={"Log In"} />
        </div>
        <div className="col-md-5 margin-top-resp">
          <Link to={"/signup"}>
            <ButtonOutline title={"Sign Up"} />
          </Link>
        </div>
      </div>

      <div className="mt-5 text-center">
        <Link to="/">Terms of use. Privacy policy</Link>
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
