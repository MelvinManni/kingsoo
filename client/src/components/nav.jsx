import React from "react";
import home from "./../assets/home.svg";
import user from "./../assets/user.jpg";
import Input from "./input";
import { Link } from "@reach/router";

export default function Nav({ children, title }) {
  return (
    <header>
      <div className="row">
        <nav className="sideNav col-3 p-0 d-flex flex-column align-items-center">
          <div className="logo">
            <h2 className="my-5">[LOGO]</h2>
          </div>

          <div className="mt-2 w-100">
            <Link to="/">
              <div className="navigate ">
                <img src={home} alt="" /> <h4>Dashboard</h4>
              </div>
            </Link>
            <div className="navigate my-2">
              <img src={home} alt="" /> <h4>Tacking</h4>
            </div>
            <div className="navigate">
              <img src={home} alt="" /> <h4>Reports</h4>
            </div>
          </div>
        </nav>
        <aside className="col-9 mb-4">
          <nav className="topnav p-2 row justify-content-between">
            <div className="col-9">
              <Input type="text" placeholder={"Search clients"} />
            </div>

            <div className="col-3 row align-items-center">
              <p>Melvin</p>
              <div className="avatar">
                <img src={user} alt="" className="rounded" />
              </div>
            </div>
          </nav>
          <div className="content container mt-5">
            <h4 className="mb-3">{title}</h4>
            {children}
          </div>
        </aside>
      </div>
    </header>
  );
}
