import React from "react";
import Input from "./input";

function AirForm() {
  return (
    <React.Fragment>
      <div className="form-group ">
        <label> Airline </label>{" "}
        <Input/>
      </div>

      <div className="form-group ">
        <label> W/B </label>{" "}
        <Input/>
      </div>
    </React.Fragment>
  );
}

export default AirForm;
