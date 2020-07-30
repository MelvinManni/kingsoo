import React from "react";
import Nav from "../../components/nav";
import Card from "../../components/card";

function Dashboard() {
  return (
    <Nav title={"Overview"}>
      <div className="row">
        <div className="col-md-6">
          <Card title="Operations" link={'/operations'} />
        </div>
        <div className="col-md-6 margin-top-resp">
          <Card title="Admin" link={'/admin'} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <Card title="Transport" link={'/transport'} />
        </div>
        <div className="col-md-6 margin-top-resp">
          <Card title="Marine" link={'/marine'} />
        </div>
      </div>
    </Nav>
  );
}

export default Dashboard;
