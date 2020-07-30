import React from "react";
import Nav from "../../components/nav";
import ImportCCForm from "../../components/importCCForm";

function ImportClearance() {
  return (
    <Nav title={"Import Custom Clearance"}>
      <div>
        <ImportCCForm />
      </div>
    </Nav>
  );
}

export default ImportClearance;
