import React from "react";
import Input from "../input";

function InputGroup({ label, placeholder, type }) {
  return (
    <div className="form-group d-flex">
      <label className="mr-2 col-md-6">{label}</label>
      <div className="col-md-6 p-0">
        <Input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

export default InputGroup;
