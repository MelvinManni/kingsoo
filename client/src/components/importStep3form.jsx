import React, { useState } from "react";
import Input from "./input";
import InputGroup from "./Importcc/step2formGroup";
import UploadGroup from "./Importcc/uploadGroup";
import Button from "./button";
import { Link } from "@reach/router";

function ImportCCForm3() {
  return (
    <React.Fragment>
      <form action="">
        <div className="col-md-12">
          <div className="col-md-6">
            <div className="form-group row">
              <label className=" col-md-6">Date Recieved</label>
              <div className=" pl-0">
                <input
                  type="date"
                  name=""
                  className="form-control mr-auto max-content"
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <InputGroup label={"PAAR number"} type={"number"} />
            </div>
            <div className="col-md-6">
              <InputGroup label={"Value"} type={"number"} />
            </div>
          </div>

          <div className="col-md-6 pl-0">
            <UploadGroup
              label={"Upload PARR Document"}
              placeholder={"Browse"}
            />
          </div>
          <h4 className="col-12 my-4">Assessment Notice</h4>
          <div className="col-md-6">
            <div className="form-group row">
              <label className=" col-md-6">Date Recieved</label>
              <div className=" pl-0">
                <input
                  type="date"
                  name=""
                  className="form-control mr-auto max-content"
                  id=""
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <InputGroup label={"Customer Number"} type={"number"} />
            </div>
            <div className="col-md-6">
              <InputGroup label={"Value"} type={"number"} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <InputGroup label={"Assessment Number"} type={"number"} />
        </div>

        <div className="col-md-6">
          <UploadGroup
            label={"Upload Assesment Notice"}
            placeholder={"Browse"}
          />
        </div>

        <div className="col-12">
          <div className="col-md-9">
            <div className="form-group row">
              <label className=" col-md-4 pr-0">Shipping Payment Date</label>
              <div className="mr-2">
                <input
                  type="date"
                  name=""
                  className="form-control max-content"
                  id=""
                />
              </div>

              <div className="row flex-nowrap col-3">
                <p>Bank</p>
                <select name="" id="" className=" ml-2 custom-select"></select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <UploadGroup label={"Upload Duty Reciept"} placeholder={"Browse"} />
        </div>

        <div className="col-12">
          <div className="col-md-6">
            <div className="form-group row">
              <label className=" col-md-6">Shipping Payment Date</label>
              <div className=" pl-0">
                <input
                  type="date"
                  name=""
                  className="form-control mr-auto max-content"
                  id=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group row">
              <label className=" col-md-6">Terminal Charges Payment Date</label>
              <div className=" pl-0">
                <input
                  type="date"
                  name=""
                  className="form-control mr-auto max-content"
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto row col-md-6">
          <div className="col-6">
            <Link to="/import-custom-clearance/step-2">
              <Button title="Previous" />
            </Link>
          </div>
          <div className="col-6">
            <Link to="/transaction">
              <Button title="Next" />
            </Link>
          </div>
        </div>
      </form>{" "}
    </React.Fragment>
  );
}

export default ImportCCForm3;
