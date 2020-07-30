import React from "react";
import Nav from "../../components/nav";
import Card from "../../components/card";

function Operations() {
  return (
    <Nav title={"Overview"}>
      <div className="row">
        <div className="col-md-6">
          <Card title="Import Custom Clearance" link={'/import-custom-clearance'} />
        </div>
        <div className="col-md-6 margin-top-resp">
          <Card title="Personal Effects" link={'/personal-effects'} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <Card title="Haulage" link={'/haulage'} />
        </div>
        <div className="col-md-6 margin-top-resp">
          <Card title="Export Clearance" link={'/export-clearance'} />
        </div>
      </div>
    </Nav>
  );
}

export default Operations;
