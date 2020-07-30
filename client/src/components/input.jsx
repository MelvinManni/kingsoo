import React from "react";

function Input({ type, require, placeholder, name, value, onChange }) {
  return (
    <React.Fragment>
      {require === "false" ? (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
          name={name}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"
          name={name}
          required
        />
      )}
    </React.Fragment>
  );
}

export default Input;
