import React from "react";
import Input from "../input";

function UploadGroup({ label, name, placeholder, type }) {
  return (
    <div className="form-group d-flex">
      <label className="col-6 pr-0">{label}</label>
      <div className=" col-6">
        <label className="uploadGroupLabel">
          {placeholder}
          <input type="file" name={name} id="" className={'collapse'} />
        </label>
      </div>
    </div>
  );
}

export default UploadGroup;
