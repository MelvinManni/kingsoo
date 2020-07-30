import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import { Link } from "@reach/router";
import ButtonOutline from "./buttonOutLine";

function LoginForm() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const handleChange = (e) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  return (
    <React.Fragment>
      <div className="logo text-center my-5">
        <h2>[LOGO]</h2>
      </div>
      <form id="logInForm" className="signUpForm">
        <div className="form-group">
          <Input
            type={"text"}
            placeholder={"Username"}
            value={user.userName}
            name={"userName"}
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