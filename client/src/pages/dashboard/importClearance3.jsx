import React, { useState } from "react";
import Nav from "../../components/nav";
import ImportCCForm3 from "../../components/importStep3form";

function ImportClearance3() {
  return (
    <Nav title={"Import Custom Clearance"}>
      <div>
        <ImportCCForm3 />
      </div>
    </Nav>
  );
}

export default ImportClearance3;
