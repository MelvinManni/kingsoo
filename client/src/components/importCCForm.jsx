import React, { useState } from "react";
import SeaForm from "./seaForm";
import AirForm from "./airForm";
import Button from "./button";
import { Link } from "@reach/router";

function ImportCCForm() {
  const [freight, setFreight] = useState("");

  const [tab, setTab] = useState("");
  return (
    <React.Fragment>
      <div className="row justify-content-betweeen">
        <label className="col-6">
          <input
            type="radio"
            name="tab"
            id=""
            value="sea"
            onChange={(e) => setTab(e.target.value)}
          />{" "}
          Sea
        </label>

        <label className="col-6">
          <input
            type="radio"
            name="tab"
            id=""
            value="air"
            onChange={(e) => setTab(e.target.value)}
          />{" "}
          Air
        </label>
      </div>
      <form>
        <div className="col-lg-8 p-o mt-5">
          {tab === "sea" ? <SeaForm /> : <AirForm />}
        </div>
        <div className="client col-8">
          <div className="row">
            <p className="col-md-4">Client</p>

            <select name="client" id="" className="col-md-4 custom-select">
              <option value="" disabled selected>
                {" "}
                Select Client
              </option>
            </select>

            <div className="col-md-4">
              <a href="javascript:void(0);">Add New Cient +</a>
            </div>
          </div>
        </div>

        <div className="row justify-content-betweeen mt-2 col-8">
          <p className="col-md-4">Type Of Freight </p>
          <label className="col-md-4">
            <input
              type="radio"
              name="freight"
              id=""
              value="direct"
              onChange={(e) => setFreight(e.target.value)}
            />{" "}
            Direct
          </label>

          <label className="col-md-4">
            <input
              type="radio"
              name="tab"
              id=""
              value="air"
              onChange={(e) => setFreight(e.target.value)}
            />{" "}
            Indirect
          </label>
        </div>
      </form>

      <div className="col-12 mt-5">
        <div className="ml-auto col-md-3">
          <Link to="/import-custom-clearance/step-2">
            <Button title="Next" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImportCCForm;
