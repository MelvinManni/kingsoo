import React, { useState } from "react";
import Input from "./input";
import InputGroup from "./Importcc/step2formGroup";
import UploadGroup from "./Importcc/uploadGroup";
import Button from "./button";
import { Link } from "@reach/router";

function ImportCCForm2() {
  return (
    <React.Fragment>
      <form action="">
        <div className="col-md-8">
          <div className="form-group d-flex flex-wrap">
            <label className="mr-2 col-md-6">Pre- Alert Date</label>
            <input
              type="date"
              name=""
              className="form-control col-md-6 max-content"
              id=""
            />
          </div>
          <InputGroup label={"Shipper"} />
          <InputGroup label={"Consignee"} />
          <InputGroup label={"Form M. Number"} type={"number"} />
          <InputGroup label={"Cargo Description"} />
          <div className="form-group d-flex flex-wrap">
            <label className="mr-2 col-md-6">Estimated time of arrival</label>
            <input
              type="date"
              name=""
              className="form-control col-md-6 max-content"
              id=""
            />
          </div>
          <InputGroup label={"Cargo Destination"} />
        </div>
        <div className="col-md-10 row">
          <div className="col-md-6">
            <InputGroup label={"If Others"} placeholder={"Cargo ID"} />
          </div>
          <div className="col-md-6">
            <InputGroup
              label={"Container Number"}
              placeholder={"Container Number"}
            />
          </div>
        </div>

        <div className="col-md-12 row">
          <div className="col-md-4">
            <UploadGroup
              label={"Upload Bill Of Laden"}
              placeholder={"Browse"}
            />
          </div>
          <div className="col-md-4">
            <UploadGroup
              label={"Upload Commercial Invoive"}
              placeholder={"Browse"}
            />
          </div>

          <div className="col-md-4">
            <UploadGroup label={"Upload Contract"} placeholder={"Browse"} />
          </div>
        </div>

        <div className="ml-auto row col-md-6">
          <div className="col-6">
            <Link to="/import-custom-clearance">
              <Button title="Previous" />
            </Link>
          </div>
          <div className="col-6">
            <Link to="/import-custom-clearance/step-3">
              <Button title="Next" />
            </Link>
          </div>
        </div>
      </form>{" "}
    </React.Fragment>
  );
}

export default ImportCCForm2;
