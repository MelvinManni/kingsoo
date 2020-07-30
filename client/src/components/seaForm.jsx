import React from "react";
import Input from "./input";

function SeaForm() {
  return (
    <React.Fragment>
      <div className="form-group ">
        <label> SCAC </label>{" "}
        <Input/>
      </div>

      <div className="form-group ">
        <label> B/L </label>{" "}
        <Input/>
      </div>
    </React.Fragment>
  );
}

export default SeaForm;
