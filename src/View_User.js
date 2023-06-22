import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function View_User() {
  const Params = useParams();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log(searchParams.get("status"));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <h6>ID : {Params.id}</h6>
          <h6>User Name: Person1</h6>
        </div>
        <div className="col-lg-6">User email: Person1</div>
        <div className="col-lg-6">City: Person1</div>
        <div className="col-lg-6">State: Person1</div>
        <div className="col-lg-6">Country: Person1</div>
        <div className="col-lg-6">Gender: Person1</div>
        <div className="col-lg-6">DOB: Person1</div>
        <div className="col-lg-6">Phone: Person1</div>
      </div>
    </div>
  );
}

export default View_User;
