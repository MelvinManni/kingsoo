import React, { useState } from "react";
import Nav from "../../components/nav";
import ImportCCForm2 from "../../components/importStep2Form";

function ImportClearance2() {
  return (
    <Nav title={"Import Custom Clearance"}>
      <div>
        <ImportCCForm2 />
      </div>
    </Nav>
  );
}

export default ImportClearance2;
